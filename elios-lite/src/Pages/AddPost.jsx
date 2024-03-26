import React, { useState } from "react";
import DefaultLayout from "../Components/DefaultLayout";

const AddPost = () => {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    }
  return (
    <DefaultLayout>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
        ></textarea>

        <div className="icons flex text-gray-500 m-2">
          <label for="file-input" class="sr-only">
            Choose file
          </label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                    dark:file:bg-gray-700 dark:file:text-gray-400"
            onChange={(e) => onImageChange(e)}
          />          

          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>
        { image && (
            <img src={URL.createObjectURL(image)} alt="" className="mt-5 h-52 w-52 rounded"/>
          )}

        <div className="buttons flex">
          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
            Post
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddPost;
