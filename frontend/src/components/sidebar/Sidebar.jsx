import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdEditDocument,
  MdManageAccounts,
  MdTag,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen">
      <div className="p-4 border-b-2 mx-5 border-primeBlue">
        <h1 className="text-primeBlue text-2xl font-semibold text-center">
          Admin Panel
        </h1>
      </div>
      <nav className="mt-6">
        <Link
          to="/dashboard"
          className="text-navy hover:text-primeBlue py-2 px-4 flex items-center"
        >
          <MdDashboardCustomize className="text-xl mr-2" />
          Notes
        </Link>

        <Link
          to="/note"
          className="text-navy hover:text-primeBlue py-2 px-4 flex items-center"
        >
          <MdTag className="text-xl mr-2" />
          Note
        </Link>
        <Link
          to="/profile"
          className="text-navy hover:text-primeBlue py-2 px-4 flex items-center"
        >
          <MdManageAccounts className="text-xl mr-2" />
          Profile
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
