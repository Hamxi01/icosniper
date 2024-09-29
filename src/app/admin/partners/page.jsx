"use client";

import React, { useEffect, useState } from "react";
import { Table, Modal, Button, Input as AntInput, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { handleFileDelete, handleFileUpload } from "@/lib/firebaseFileManage";

const PartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  const { control, handleSubmit, reset } = useForm();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const [newLogo, setNewLogo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchPartners = async (page, limit, query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/partners?page=${page}&limit=${limit}&query=${query}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch partners.");
      }

      const data = await res.json();
      setPartners(data.partners); // Ensure this aligns with the API response
      setTotal(data.total);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners(page, limit, query);
  }, [page, limit, query]);

  const onSubmit = async (data) => {
    setUploading(true);

    const method = editMode ? "PUT" : "POST";
    const url = `/api/partners`; // Using the same URL for both methods

    try {
      let logo = editMode ? currentPartner.logo : ""; // Default if no new media is uploaded
      if (newLogo) {
        logo = await handleFileUpload(newLogo, "partner-logo/"); // Upload logo if provided
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          logo: logo,
          id: currentPartner?.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to save partner.");
      fetchPartners(page, limit, query);
      message.success(
        `Partner ${editMode ? "updated" : "added"} successfully.`
      );
      reset();
      setVisible(false);
    } catch (error) {
      message.error(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewLogo(file); // Update the state with the new file
  };

  const handleEdit = (partner) => {
    setCurrentPartner(partner);
    setEditMode(true);
    setVisible(true);
    reset(partner); // Reset the form with current partner data
  };

  const handleDelete = async (data) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this partner?"
    );
    if (!confirmed) return;

    try {
      // Delete the partner from your API
      await fetch(`/api/partners`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: data.id }),
      });

      // Call the delete function to remove the logo from Firebase
      await handleFileDelete(data.logo); // Use the logo path to delete the file

      fetchPartners(page, limit, query);
      message.success("Partner deleted successfully.");
    } catch (error) {
      message.error("Failed to delete partner.");
    }
  };

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      render: (text) => <img src={text} alt="Logo" style={{ width: 50 }} />,
    },
    { title: "Title", dataIndex: "title" },
    { title: "Description", dataIndex: "description" },
    {
      title: "Link",
      dataIndex: "link",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <AntInput.Search
        placeholder="Search partners"
        onSearch={(value) => {
          setQuery(value);
          setPage(1);
        }}
        style={{ marginBottom: 16 }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          setVisible(true);
          setEditMode(false);
          reset();
        }}
        style={{ marginBottom: 16 }}
      >
        Add Partner
      </Button>
      <Table
        dataSource={partners}
        columns={columns}
        rowKey="id"
        pagination={{
          total,
          current: page,
          pageSize: limit,
          onChange: (page, limit) => {
            setPage(page);
            setLimit(limit);
          },
        }}
        loading={loading}
      />
      <Modal
        title={editMode ? "Edit Partner" : "Add Partner"}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentPartner && (
            <img src={currentPartner.logo} alt={currentPartner.title} />
          )}
          <AntInput
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange} // Handle file change
          />
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <AntInput
                placeholder="Title"
                {...field}
                style={{ marginTop: 8 }}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <AntInput.TextArea
                placeholder="Description"
                {...field}
                style={{ marginTop: 8 }}
              />
            )}
          />
          <Controller
            name="link"
            control={control}
            render={({ field }) => (
              <AntInput
                placeholder="Link"
                {...field}
                style={{ marginTop: 8 }}
              />
            )}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: 16 }}
            disabled={uploading}
            className={`mt-4 w-full px-4 py-2 text-white transition duration-300 rounded ${
              uploading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            {uploading
              ? "Saving..."
              : editMode
              ? "Update Partner"
              : "Add Partner"}
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default PartnersPage;
