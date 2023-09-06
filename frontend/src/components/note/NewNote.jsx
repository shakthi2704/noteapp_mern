import React, { useState } from "react";
import { Sidebar, Header } from "../../components";
import { MdPushPin } from "react-icons/md";
import { FaTimes } from "react-icons/fa"; // Import the X icon
import { tags as allTags } from "../../constants";
import { useCreateNoteMutation } from "../../slices/note/notesApiSlice";

const NewNote = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState(allTags);
  const [newNoteTitle, setNewNoteTitle] = useState(""); // Track the new note title
  const [noteContent, setNoteContent] = useState("");

  // Import the useCreateNoteMutation hook
  const createNoteMutation = useCreateNoteMutation();

  const handleTagSelection = (event) => {
    const selectedOptions = event.target.selectedOptions;
    const selectedTagIds = Array.from(selectedOptions).map(
      (option) => option.value
    );
    setSelectedTags(selectedTagIds);

    // Update the available tags by filtering out the selected ones
    const remainingTags = availableTags.filter(
      (tag) => !selectedTagIds.includes(tag.id)
    );
    setAvailableTags(remainingTags);
  };

  const handleRemoveTag = (tagId) => {
    const updatedSelectedTags = selectedTags.filter((id) => id !== tagId);
    setSelectedTags(updatedSelectedTags);

    // Add the removed tag back to the available tags list
    const removedTag = allTags.find((tag) => tag.id === tagId);
    setAvailableTags([...availableTags, removedTag]);
  };

  const selectedTagNames = selectedTags.map((tagId) => {
    const selectedTag = allTags.find((tag) => tag.id === tagId);
    return selectedTag.name;
  });

  const selectedTagsText = selectedTagNames.join(", ");

  const handleCreateNote = async () => {
    // Prepare the new note object
    const newNote = {
      title: newNoteTitle, // Use the title field for the note title
      content: noteContent,
      tags: selectedTags,
    };

    try {
      const { data } = await createNoteMutation.mutateAsync(newNote);

      // Handle a successful note creation here if needed
      console.log("New note created:", data);

      // Clear form fields after successful creation
      setNewNoteTitle("");
      setNoteContent("");
      setSelectedTags([]);
    } catch (error) {
      // Handle errors (e.g., validation errors, network issues)
      console.error("Error creating note:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <section className="flex-1 w-full bg-white shadow p-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg flex items-center">
              <span className="text-xl mr-2 text-navy">
                <MdPushPin />
              </span>
              New Note
            </h2>
          </div>
          <div className="w-full border-b-2 mt-2 border-blueSecondary"></div>
          <div className="flex items-top justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full mt-10 p-6 bg-white shadow-md rounded-md">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-xl font-semibold">Add New Note</h1>
              </div>
              <form className="mt-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Note Title
                  </label>
                  <input
                    id="tagInput"
                    type="text"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter a note title"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="tags" className="block text-gray-600 mb-2">
                    Select Tags
                  </label>
                  <select
                    id="tags"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    multiple
                    value={selectedTags}
                    onChange={handleTagSelection}
                  >
                    {availableTags.map((tag) => (
                      <option key={tag.id} value={tag.id}>
                        {tag.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Content
                  </label>
                  <textarea
                    id="content"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter the content"
                    required
                    rows={5}
                    cols={10}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                  />
                </div>
                {selectedTags.length > 0 && (
                  <div className="mt-4">
                    <p className="font-semibold">Selected Tags:</p>
                    <div className="mt-2">
                      {selectedTagNames.map((tagName, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-200 rounded-full px-2 py-1 m-1"
                        >
                          {tagName}
                          <button
                            type="button"
                            className="ml-2 text-red-600"
                            onClick={() => handleRemoveTag(selectedTags[index])}
                          >
                            <FaTimes />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="w-full mt-4 bg-primeBlue text-white p-2 rounded-md hover:bg-blue-600"
                  onClick={handleCreateNote}
                >
                  Create Note
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewNote;
