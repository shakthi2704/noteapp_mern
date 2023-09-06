import React from "react";

const NoteModal = ({ note, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-sm">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">Note Title</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-primeBlue opacity-5 h-6 w-6 text-2xl block">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-blueGray-500 text-ms leading-relaxed">
              {note.content}
            </p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
