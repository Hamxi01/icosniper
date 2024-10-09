"use client";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

const fetchVisitorData = async () => {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const { ip: visitorIp } = await ipRes.json();

    const locationRes = await fetch(`https://ipapi.co/${visitorIp}/json/`);
    const locationData = await locationRes.json();
    return {
      visitorIp,
      location: `${locationData.city}, ${locationData.country_name}`,
    };
  } catch (error) {
    console.error("Error fetching IP or location:", error);
    return { visitorIp: null, location: "Unknown" };
  }
};

const sendMetaData = async (meta) => {
  try {
    const response = await fetch("/api/meta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meta),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Failed to send metadata:", errorResponse.error);
      throw new Error("Failed to send metadata");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending meta data:", error);
  }
};

export default function TrackVisitor() {
  const [metaData, setMetaData] = useState(null);
  const [startTime] = useState(Date.now());
  const [pageViews, setPageViews] = useState(1);
  const [isTracked, setIsTracked] = useState(false);

  useEffect(() => {
    // Only fetch data once if not already tracked
    if (!isTracked) {
      const parser = new UAParser();
      const result = parser.getResult();
      const visitTime = new Date();

      fetchVisitorData().then(({ visitorIp, location }) => {
        const initialMeta = {
          visitorIp,
          visitTime: visitTime.toISOString(),
          location,
          browser: result.browser.name,
          os: result.os.name,
          device: result.device.type || "Desktop",
          duration: 0, // To be updated later
          referrer: document.referrer || null,
          pageViews: 1, // Initial page view
        };

        console.log("Initial metadata to send:", initialMeta); // Log initial metadata
        setMetaData(initialMeta);
        sessionStorage.setItem("isTracked", "true");
        setIsTracked(true);
        sessionStorage.setItem("pageViews", 1);

        // Send the initial data immediately after setting state
        sendMetaData(initialMeta);
      });
    } else {
      // Increment page views only if already tracked
      const existingPageViews =
        parseInt(sessionStorage.getItem("pageViews")) || 1;
      setPageViews(existingPageViews + 1);
      sessionStorage.setItem("pageViews", existingPageViews + 1);
    }

    const handlePageUnload = async () => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - startTime) / 1000); // in seconds

      if (metaData) {
        const updatedMeta = {
          visitorIp: metaData.visitorIp,
          duration: timeSpent,
          pageViews: parseInt(sessionStorage.getItem("pageViews")) || 1,
        };

        console.log("Sending updated metadata:", updatedMeta); // Log updated metadata
        await sendMetaData(updatedMeta); // Send updated data
      }
    };

    // Attach the beforeunload event listener
    window.addEventListener("beforeunload", handlePageUnload);

    return () => {
      // Clean up the event listener
      window.removeEventListener("beforeunload", handlePageUnload);
    };
  }, [metaData, startTime, isTracked]);

  return (
    <>
      {/* <div>
        <h1>Tracking Visitor Information</h1>
        {metaData ? (
          <pre>{JSON.stringify(metaData, null, 2)}</pre>
        ) : (
          <p>Loading visitor data...</p>
        )}
      </div> */}
    </>
  );
}
