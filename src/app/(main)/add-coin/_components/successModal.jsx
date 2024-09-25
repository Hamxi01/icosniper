// components/SuccessModal.jsx
import React from "react";
import { Modal } from "antd"; // Assuming you're using Ant Design
import { CheckCircleOutlined } from "@ant-design/icons";

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={onClose}
      centered
      closable={false} // Prevent closing on backdrop click
      className="success-modal"
    >
      <div className="flex flex-col items-center">
        <CheckCircleOutlined className="text-green-500 text-6xl animate-bounce" />
        <h2 className="text-lg font-semibold mt-4">
          Coins Added Successfully!
        </h2>
      </div>
    </Modal>
  );
};

export default SuccessModal;
