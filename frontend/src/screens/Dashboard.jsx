import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Header } from "../components";
import { MdPushPin } from "react-icons/md";

const Dashboard = () => {
  const notes = [
    {
      title: "Note 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "August 25, 2023",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      title: "Note 2",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: "August 26, 2023",
      tags: ["tag4", "tag5"],
    },
    // Add more notes here
  ];

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleViewNote = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  const notesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const displayedNotes = notes.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
            {/* {notes.map((note, index) => (
              <NoteCard
                key={index}
                note={note}
                onViewNote={() => handleViewNote(note)}
              />
            ))} */}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <NoteModal note={selectedNote} onClose={closeModal} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
