"use client";
import React from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <div className="min-h-screen flex flex-col">
          <ThemeProvider>
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
