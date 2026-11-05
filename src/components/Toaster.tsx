"use client";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// One app-wide container; call notify.*() (src/lib/notify.tsx) from anywhere.
export function Toaster() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={6000}
      transition={Slide}
      theme="dark"
      newestOnTop
      closeOnClick={false}
      pauseOnFocusLoss={false}
    />
  );
}
