"use client";
import React from "react";
import { toast, type Id } from "react-toastify";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

type Kind = "success" | "error" | "loading";

function ToastBody({ kind, title, message }: { kind: Kind; title: string; message?: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <span
        className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full ${
          kind === "success" ? "bg-lime text-ink" : kind === "error" ? "bg-red-500/15 text-red-400" : "bg-white/10"
        }`}
      >
        {kind === "success" && <FiCheck className="h-5 w-5" strokeWidth={3} />}
        {kind === "error" && <FiAlertTriangle className="h-5 w-5" />}
        {kind === "loading" && (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-lime" />
        )}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="font-display text-[15px] font-bold uppercase tracking-tight text-white">{title}</p>
        {message && <p className="mt-1 text-[13px] leading-relaxed text-white/65">{message}</p>}
      </div>
    </div>
  );
}

const base = { icon: false as const, closeButton: true };

/** Branded toasts: dark card, lime success, red error, inline spinner for loading. */
export const notify = {
  loading(title: string, message?: string): Id {
    return toast.loading(<ToastBody kind="loading" title={title} message={message} />, { ...base, closeButton: false });
  },
  success(title: string, message?: string, id?: Id) {
    const render = <ToastBody kind="success" title={title} message={message} />;
    if (id !== undefined)
      return toast.update(id, { ...base, render, type: "success", isLoading: false, autoClose: 6000 });
    return toast.success(render, { ...base, autoClose: 6000 });
  },
  error(title: string, message?: string, id?: Id, toastId?: string) {
    const render = <ToastBody kind="error" title={title} message={message} />;
    if (id !== undefined)
      return toast.update(id, { ...base, render, type: "error", isLoading: false, autoClose: 6000 });
    return toast.error(render, { ...base, autoClose: 6000, toastId });
  },
};
