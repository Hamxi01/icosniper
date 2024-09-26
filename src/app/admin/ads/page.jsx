"use client";
import React, { useEffect, useState } from "react";

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
    mediaFile: null, // Added for file upload
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    const placeholderData = [
      // Placeholder data for demonstration purposes
      {
        id: 1,
        name: "Banner 1",
        url: "https://example.com",
        media: "https://via.placeholder.com/150",
        launchDate: "2023-01-01",
        endDate: "2023-12-31",
        placement: "main",
        value: 100.0,
        status: "active",
        mediaType: "image",
      },
      {
        id: 2,
        name: "Banner 2",
        url: "https://example.com",
        media: "https://www.w3schools.com/html/mov_bbb.mp4",
        launchDate: "2023-02-01",
        endDate: "2023-12-31",
        placement: "footer",
        value: 50.0,
        status: "active",
        mediaType: "video",
      },
    ];
    setBanners(placeholderData);
  };

  const openModal = (banner = null) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData({ ...banner });
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
        mediaFile: null, // Reset file upload
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingBanner(null);
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
    setFormData((prevData) => ({
      ...prevData,
      mediaFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingBanner) {
      await updateBanner(formData);
    } else {
      await addBanner(formData);
    }
    fetchBanners();
    closeModal();
  };

  const addBanner = async (banner) => {
    console.log("Adding banner:", banner);
    // Your API call logic to add a banner goes here
  };

  const updateBanner = async (banner) => {
    console.log("Updating banner:", banner);
    // Your API call logic to update a banner goes here
  };

  const deleteBanner = async (id) => {
    console.log("Deleting banner with id:", id);
    // Your API call logic to delete a banner goes here
    fetchBanners();
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

      {["main", "rotating", "box", "footer"].map((placement) => (
        <div key={placement} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {placement.charAt(0).toUpperCase() + placement.slice(1)} Banners
          </h2>
          <ul className="space-y-2">
            {banners
              .filter((banner) => banner.placement === placement)
              .map((banner) => (
                <li
                  key={banner.id}
                  className="flex items-center justify-between bg-gray-800 p-4 rounded shadow"
                >
                  <div>
                    <span className="font-semibold">{banner.name}</span> -{" "}
                    {banner.mediaType === "image" ? (
                      <img
                        src={banner.media}
                        alt={banner.name}
                        className="h-48 w-full object-cover rounded mt-2"
                      />
                    ) : banner.mediaType === "video" ? (
                      <video
                        className="h-48 w-full object-cover rounded mt-2"
                        controls
                      >
                        <source src={banner.media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : null}
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 transition duration-300 hover:bg-yellow-400"
                      onClick={() => openModal(banner)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded transition duration-300 hover:bg-red-500"
                      onClick={() => deleteBanner(banner.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            {banners.filter((banner) => banner.placement === placement)
              .length === 0 && (
              <li className="text-gray-500">No banners available</li>
            )}
          </ul>
        </div>
      ))}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[700px]">
            <h2 className="text-xl font-bold mb-4">
              {editingBanner ? "Edit Banner" : "Add Banner"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="url">
                    URL
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="text"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Placement Dropdown */}
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="placement">
                    Placement
                  </label>
                  <select
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
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
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="media">
                    Media URL or File Upload
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500 mb-2"
                    type="text"
                    name="media"
                    placeholder="Enter media URL"
                    value={formData.media}
                    onChange={handleChange}
                  />
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="file"
                    name="mediaFile"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="launchDate">
                    Launch Date
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="date"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="endDate">
                    End Date
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="value">
                    Value
                  </label>
                  <input
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    type="number"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="status">
                    Status
                  </label>
                  <select
                    className="border border-gray-600 bg-gray-700 p-2 w-full text-white focus:outline-none focus:border-blue-500"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 transition duration-300 hover:bg-gray-400"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-500"
                  type="submit"
                >
                  {editingBanner ? "Update Banner" : "Add Banner"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerManagement;
