"use client";

import React, { useEffect, useState } from "react";
import { Table, Modal, Button, Input as AntInput, message, Select } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { handleFileDelete, handleFileUpload } from "@/lib/firebaseFileManage";

const IcoScamPage = () => {
  const [icoscams, setIcoScams] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentIcoScam, setCurrentIcoScam] = useState(null);
  const { control, handleSubmit, reset } = useForm();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const [newLogo, setNewLogo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchIcoScams = async (page, limit, query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/ico-scams?page=${page}&limit=${limit}&query=${query}`
      );
      const data = await res.json();
      setIcoScams(data.icoScams);
      setTotal(data.total);
    } catch (error) {
      message.error("Failed to fetch ICO scams.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIcoScams(page, limit, query);
  }, [page, limit, query]);

  const onSubmit = async (data) => {
    const method = editMode ? "PUT" : "POST";
    const url = editMode ? `/api/ico-scams` : `/api/ico-scams`;

    try {
      let logo = editMode ? currentIcoScam.logo : ""; // Default if no new media is uploaded
      if (newLogo) {
        logo = await handleFileUpload(newLogo, "ico-scams/"); // Upload logo if provided
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, logo: logo, id: currentIcoScam?.id }),
      });

      if (!res.ok) throw new Error("Failed to save ICO scam.");
      fetchIcoScams(page, limit, query);
      message.success(
        `ICO scam ${editMode ? "updated" : "added"} successfully.`
      );
      reset();
      setVisible(false);
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewLogo(file); // Update the state with the new file
  };

  const handleEdit = (icoScam) => {
    setCurrentIcoScam(icoScam);
    setEditMode(true);
    setVisible(true);
    reset(icoScam);
  };

  const handleDelete = async (data) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this ICO scam?"
    );
    if (!confirmed) return;

    try {
      await fetch(`/api/ico-scams`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: data.id }),
      });

      // Call the delete function to remove the logo from Firebase
      await handleFileDelete(data.logo); // Use the logo path to delete the file

      fetchIcoScams(page, limit, query);
      message.success("ICO scam deleted successfully.");
    } catch (error) {
      message.error("Failed to delete ICO scam.");
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
    { title: "Status", dataIndex: "status" },
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
        placeholder="Search ICO scams"
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
        Add ICO Scam
      </Button>
      <Table
        dataSource={icoscams}
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
        title={editMode ? "Edit ICO Scam" : "Add ICO Scam"}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentIcoScam && (
            <img src={currentIcoScam.logo} alt={currentIcoScam.title} />
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
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select Status"
                className="w-full"
                style={{ marginTop: 8 }}
              >
                <Option value="COMPLAIN">Complain</Option>
                <Option value="UNDER_REVIEW">Under Review</Option>
                <Option value="SCAM_ICO">Scam ICO</Option>
              </Select>
            )}
          />
          <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
            {editMode ? "Update" : "Add"}
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default IcoScamPage;
