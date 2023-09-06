import React from "react";
import { useFetchTagsQuery } from "../slices/tag/tagApiSlice";
import { Header, Sidebar, TagCard } from "../components";
import { Link } from "react-router-dom";

const Tags = () => {
  // Fetch tag data using useFetchTagsQuery
  const { data: tags } = useFetchTagsQuery();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <section className="flex-1 w-full bg-white shadow p-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base flex items-center">Tags</h2>
            <Link
              to="/new-tag"
              className="text-white bg-primeBlue px-3 py-2 rounded-md hover:text-gray-300 text-xs"
            >
              Add New Tag
            </Link>
          </div>
          <div className="w-full border-b-2 mt-2 border-primeBlue"></div>
          <div className="grid grid-cols-3 mt-4 space-x-4">
            {tags &&
              tags.map((tag, index) => (
                <TagCard
                  key={tag.id || index}
                  name={tag.name}
                  description={tag.description}
                  id={tag.id}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tags;
