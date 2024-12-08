'use client';
import withAuth from "@/components/protectedRoute/withAuth";
import DashboardSidebar from "@/components/userDashbaord/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 mt-[140px]">
      <div className="max-w-[1320px] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <DashboardSidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
