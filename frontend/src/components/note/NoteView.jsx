import React, { useState, useEffect } from "react";
import { Sidebar, Header } from "../../components";
import { MdPushPin } from "react-icons/md";

const NoteView = () => {
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
              New Tag
            </h2>
          </div>
          <div className="w-full border-b-2 mt-2 border-blueSecondary"></div>
          <div className="flex items-top justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full mt-10 p-6 bg-white shadow-md rounded-md">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl font-semibold">Add New Tag</h1>
              </div>
              <form className="mt-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    New Tag Name
                  </label>
                  <input
                    id="tagInput"
                    type="text"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter a new tag name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Description
                  </label>
                  <textarea
                    id="content"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter the content"
                    required
                    rows={2}
                    cols={10}
                  />
                </div>
                <button
                  type="button"
                  className="w-full mt-4 bg-primeBlue text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Create Tag
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NoteView;
