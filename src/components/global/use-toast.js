"use client";
import { createContext, useContext, useState } from "react";

// Create a context for the toast
const ToastContext = createContext();

// Toast Provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, { id: Date.now(), ...toast }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 3000); // Automatically remove toast after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-0 right-0 p-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-800 text-white p-2 rounded mb-2"
          >
            {toast.title} - {toast.description}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Hook to use the toast context
export const useToast = () => {
  return useContext(ToastContext);
};
