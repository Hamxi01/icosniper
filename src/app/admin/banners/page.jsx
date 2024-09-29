"use client";

import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"; // Adjust the import based on your icon library
import { handleFileDelete, handleFileUpload } from "@/lib/firebaseFileManage";

const BannerManagement = () => {
  const [banners, setBanners] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    media: "",
    launchDate: "",
    endDate: "",
    placement: "",
    value: "",
    status: "",
    mediaType: "",
    mediaFile: null,
  });

  const [newLogo, setNewLogo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const placements = ["main", "rotating", "box", "footer"];
  const [activeTab, setActiveTab] = useState(placements[0]); // Set the default active tab

  useEffect(() => {
    fetchBanners();
  }, []);

  // Fetch banners data from API
  const fetchBanners = async () => {
    try {
      const response = await fetch("/api/banners?showAll=true"); // Adjust endpoint
      const data = await response.json();
      setBanners(data);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const openModal = (banner = null) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData({
        ...banner,
        // Ensure the date fields are in the correct format (YYYY-MM-DD)
        launchDate: new Date(banner.launchDate).toISOString().split("T")[0],
        endDate: new Date(banner.endDate).toISOString().split("T")[0],
      });
    } else {
      setEditingBanner(null);
      setFormData({
        name: "",
        url: "",
        media: "",
        launchDate: "",
        endDate: "",
        placement: "",
        value: "",
        status: "",
        mediaType: "",
        mediaFile: null,
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingBanner(null);
    setError(""); // Reset error message on close
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewLogo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Basic validation
    if (
      !formData.name ||
      !formData.url ||
      !formData.placement ||
      !formData.launchDate ||
      !formData.endDate ||
      !formData.value
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (
      newLogo &&
      !newLogo.type.startsWith("image/") &&
      !newLogo.type.startsWith("video/")
    ) {
      setError("Please upload a valid image or video file.");
      return;
    }

    if (newLogo && newLogo.size > 5 * 1024 * 1024) {
      // 5 MB size limit
      setError("File size must be less than 5 MB.");
      return;
    }

    if (editingBanner) {
      await updateBanner(formData);
    } else {
      await addBanner(formData);
    }
    fetchBanners();
    closeModal();
  };

  // Create a new banner
  const addBanner = async () => {
    setUploading(true);
    try {
      let mediaUrl = formData.media; // Default if no new media is uploaded
      if (newLogo) {
        mediaUrl = await handleFileUpload(newLogo, "banners/"); // Upload logo if provided
      }

      const response = await fetch("/api/banners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, media: mediaUrl }),
      });

      if (response.ok) {
        await fetchBanners(); // Refresh the banners list
        setFormData({
          name: "",
          url: "",
          media: "",
          launchDate: "",
          endDate: "",
          placement: "",
          value: "",
          status: "",
          mediaType: "",
        });
        setNewLogo(null); // Clear logo
      }
    } catch (error) {
      console.error("Error creating banner:", error);
    }
    setUploading(false);
  };

  // Update a banner
  const updateBanner = async () => {
    setUploading(true);
    try {
      let mediaUrl = editingBanner.media; // Default to existing media if not updated
      if (newLogo) {
        mediaUrl = await handleFileUpload(newLogo, "banners/"); // Upload logo if provided
      }

      const updateData = { ...formData, media: mediaUrl };

      const response = await fetch(`/api/banners`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        await fetchBanners(); // Refresh banners list
        setEditingBanner(null); // Clear editing state
        setNewLogo(null); // Clear logo
      }
    } catch (error) {
      console.error("Error updating banner:", error);
    }
    setUploading(false);
  };

  // Delete a banner with confirmation
  const deleteBanner = async (banner) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this banner?"
    );
    if (!confirmed) return; // Exit if the user cancels

    try {
      const response = await fetch(`/api/banners`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: banner.id }), // Send ID in the body
      });

      if (response.ok) {
        // Call the delete function to remove the logo from Firebase
        await handleFileDelete(banner.media); // Use the logo path to delete the file

        await fetchBanners(); // Refresh banners list
      } else {
        console.error("Failed to delete banner:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Banner Management</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 transition duration-300 hover:bg-blue-500"
        onClick={() => openModal()}
      >
        Add Banner
      </button>
      {error && <div className="mb-4 text-red-500">{error}</div>}

      <div>
        <div className="flex space-x-4 mb-6">
          {placements.map((placement) => (
            <button
              key={placement}
              className={`px-4 py-2 rounded-lg transition duration-300 ${
                activeTab === placement
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab(placement)}
            >
              {placement.charAt(0).toUpperCase() + placement.slice(1)}
            </button>
          ))}
        </div>

        {placements.map((placement) => (
          <div
            key={placement}
            className={activeTab === placement ? "block" : "hidden"}
          >
            <h2 className="text-xl font-semibold mb-4">
              {placement.charAt(0).toUpperCase() + placement.slice(1)} Banners
            </h2>
            <ul className="space-y-4">
              {banners
                .filter((banner) => banner.placement === placement)
                .map((banner) => (
                  <li
                    key={banner.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800 p-4 rounded-lg shadow transition-transform transform hover:scale-105"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{banner.name}</h3>
                      <div className="mt-1">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                            banner.status === "active"
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {banner.status.charAt(0).toUpperCase() +
                            banner.status.slice(1)}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white ml-2">
                          Launch Date:{" "}
                          {new Date(banner.launchDate).toLocaleDateString()}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white ml-2">
                          End Date:{" "}
                          {new Date(banner.endDate).toLocaleDateString()}
                        </span>
                      </div>
                      {banner.mediaType === "image" ? (
                        <img
                          src={banner.media}
                          alt={banner.name}
                          className="h-fit max-h-[200px] w-full object-contain rounded mt-2"
                        />
                      ) : banner.mediaType === "video" ? (
                        <video
                          className="h-fit max-h-[200px] w-full object-contain rounded mt-2"
                          controls
                        >
                          <source src={banner.media} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : null}

                      {/* Additional Information */}
                      <div className="mt-2">
                        <p className="text-sm text-gray-300">
                          Description: <strong>{banner.description}</strong>
                        </p>
                        <p className="text-sm text-gray-300">
                          Media Type: <strong>{banner.mediaType}</strong>
                        </p>
                        <p className="text-sm text-gray-300">
                          Value: <strong>{banner.value}</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end mt-3 sm:mt-0 sm:ml-4">
                      <button
                        className="flex items-center bg-yellow-500 text-white text-sm px-3 py-1 rounded-lg transition duration-300 hover:bg-yellow-400 shadow-md mb-1"
                        onClick={() => openModal(banner)}
                      >
                        <AiOutlineEdit className="mr-1" /> Edit
                      </button>
                      <button
                        className="flex items-center bg-red-600 text-white text-sm px-3 py-1 rounded-lg transition duration-300 hover:bg-red-500 shadow-md"
                        onClick={() => deleteBanner(banner)}
                      >
                        <AiOutlineDelete className="mr-1" /> Delete
                      </button>
                    </div>
                  </li>
                ))}
              {banners.filter((banner) => banner.placement === placement)
                .length === 0 && (
                <li className="bg-gray-800 p-4 rounded-lg">
                  No banners found.
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal for adding/editing banner */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded shadow-md w-[600px]">
            {" "}
            {/* Wider modal */}
            <h2 className="text-xl font-semibold mb-4">
              {editingBanner ? "Edit Banner" : "Add Banner"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" htmlFor="name">
                    Banner Name
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="url">
                    URL
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="text"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="launchDate">
                    Launch Date
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="date"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="endDate">
                    End Date
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="placement">
                    Placement
                  </label>
                  <select
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Placement</option>
                    <option value="main">Main</option>
                    <option value="rotating">Rotating</option>
                    <option value="box">Box</option>
                    <option value="footer">Footer</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2" htmlFor="value">
                    Value
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="text"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="mediaFile">
                    Media (Image/Video)
                  </label>
                  <input
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    type="file"
                    name="mediaFile"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="mediaType">
                    Media Type
                  </label>
                  <select
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    name="mediaType"
                    value={formData.mediaType}
                    onChange={handleChange}
                  >
                    <option value="">Select Media Type</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block mb-2" htmlFor="status">
                    Status
                  </label>
                  <select
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className={`mt-4 w-full px-4 py-2 text-white transition duration-300 rounded ${
                  uploading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"
                }`}
                disabled={uploading}
              >
                {uploading
                  ? "Saving..."
                  : editingBanner
                  ? "Update Banner"
                  : "Add Banner"}
              </button>
            </form>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-500"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerManagement;
