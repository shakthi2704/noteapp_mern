import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note, onViewNote }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-4 rounded-lg shadow-xl m-2 my-2 relative border-b-2 mt-2 border-primeBlue">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-justify">
          {note.title}
        </h3>
        <p className="text-gray-600 mb-2 text-sm overflow-hidden line-clamp-6">
          {note.content}
        </p>
        <p className="text-xs text-gray-800 pt-4">{note.date}</p>
        <div className="grid grid-cols-3 my-4 gap-2">
          {note.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm font-semibold mr-2 text-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onViewNote} // Call the onViewNote function
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            View
          </button>
        </div>
        <div className="absolute top-0 right-0 mt-4">
          {/* Dropdown menu button */}
          <button
            className="text-gray-600 hover:text-gray-800 font-semibold text-sm mr-2"
            onClick={toggleDropdown}
          >
            &#8942; {/* Vertical ellipsis character */}
          </button>
          {/* Dropdown content */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md p-2 text-sm shadow-md">
              <button
                className="block w-full text-left hover:bg-gray-100 p-2 rounded-md text-blue-600 hover:text-blue-800"
                onClick={() => {
                  // Add logic for the "Edit" action here
                  closeDropdown(); // Close the dropdown
                }}
              >
                Edit
              </button>
              <button
                className="block w-full text-left hover:bg-gray-100 p-2 rounded-md text-red-600 hover:text-red-800"
                onClick={() => {
                  // Add logic for the "Delete" action here
                  closeDropdown(); // Close the dropdown
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
