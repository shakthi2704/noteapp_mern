import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Header } from "../components";
import { MdPushPin } from "react-icons/md";

const Note = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <section className="flex-1 w-full bg-white shadow p-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base flex items-center">
              <span>
                <MdPushPin className="text-xl mr-2 text-navy" />
              </span>
              All Notes
            </h2>
            <Link
              to="/new-note"
              className="text-white bg-primeBlue px-3 py-2 rounded-md hover:text-gray-300 text-xs"
            >
              Add New
            </Link>
          </div>
          <div className="w-full border-b-2 mt-2 border-primeBlue"></div>

          <div className="grid grid-cols-3 mt-4 space-x-4">
         
          </div>

      
        </section>
      </div>
    </div>
  );
};

export default Note;
