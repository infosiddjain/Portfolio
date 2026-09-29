"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// One app-wide container; any component can call toast() without rendering its own.
export function Toaster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      theme="dark"
      newestOnTop
      closeOnClick
      pauseOnFocusLoss={false}
    />
  );
}
