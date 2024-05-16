import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DefaultLayout from "../Components/DefaultLayout";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firedb } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Update current date
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const addPost = () => {
    dispatch({ type: "showLoading" });
    const storage = getStorage();
    const storageRef = ref(storage, `posts/${image.name}`);
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(ref(storage, `posts/${image.name}`)).then((url) => {
          addDoc(collection(firedb, "posts"), {
            title,
            description,
            imageURL: url,
            likes: [],
            comments: [],
            user: JSON.parse(localStorage.getItem("userData")),
          })
            .then(() => {
              toast.success("Post added successfully");
              dispatch({ type: "hideLoading" });
              navigate("/");
            })
            .catch(() => {
              dispatch({ type: "hideLoading" });
              toast.error("Something went wrong");
            });
        });
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        dispatch({ type: "hideLoading" });
        toast.warning("Failed action");
      });
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-wrap">
        <div className=" mx-auto mt-5 w-1/2 flex flex-col text-gray-800 rounded-2xl border-2 border-neutral-800 p-4 shadow-lg max-w-xl ">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800 text-white">
            New Post
          </div>
          <div class="flex  bg-gray-900 p-4 rounded-md mb-4">
            <span class="text-green-500">&gt;</span>
            <input
              type="text"
              class="bg-gray-900 text-white p-0.5 outline-none ml-2 w-full"
              placeholder="Type your title here"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="flex  bg-gray-900 p-4 rounded-md mb-4">
            <span class="text-green-500">&gt;</span>
            <textarea
              className="description bg-gray-900 text-white p-0.5 outline-none ml-2 w-full h-[200px]"
              spellCheck="false"
              placeholder="Describe everything about this post here"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="icons text-gray-500 m-2">
            <label htmlFor="file-input" className="sr-only">
              Choose file
            </label>
            <input
              type="file"
              name="file-input"
              id="file-input"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
              onChange={(e) => onImageChange(e)}
            />
          </div>
          <div className="buttons flex justify-center">
              <div class="bg-black flex justify-center items-center mt-4">
                <div class="relative inline-flex  group">
                  <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <button
                    title="Get quote now"
                    class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    
                    onClick={addPost}
                  >
                    Post
                  </button>
                </div>
              </div>
          </div>
        </div>
        {/* {image && (
         <div className="w-1/2 h-[550px] max-w-xl ">
         <article className="p-6  rounded-lg border border-gray-200 shadow-md m-5 max-w-2xl">
           <div className="mx-auto max-w-screen-sm text-center lg:mb-16 ">
             <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
               Preview
             </h1>
             <h2 className="mb-4 text-1xl lg:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
               {title}
             </h2>
             <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
               {description}
             </p>
             <img
               src={URL.createObjectURL(image)}
               alt=""
               className="mt-5 h-auto w-auto rounded h-36px max-h-[300px]" 
             />
           </div>
         </article>
       </div>
       
        )} */}
        {image && (
          <div className="mt-5 w-1/2 flex flex-col text-gray-800 rounded-2xl border-2 border-neutral-800 p-4 shadow-lg max-w-xl ">
            <div className="flex items-center justify-center text-white">
              <div class=" px-4 sm:px-6 lg:px-8 rounded-2xl p-4 my-4">
                <div class=" mx-auto">
                  {/* CONTENT */}
                  <div class="py-8">
                    <h1 class="text-3xl font-bold mb-2">{title}</h1>
                  </div>

                  <img
                    src={URL.createObjectURL(image)}
                    alt="Post example"
                    class="h-auto w-full rounded  max-h-[350px] mb-8"
                  />

                  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                    <p>{description}</p>
                  </div>
                </div>

                {/* LIKES AND COMMENTS */}
                <div className="flex justify-between">
                  <div className="text-slate-500">
                    <div className="flex space-x-4 md:space-x-8">
                      <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1.5 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        <span>125</span>
                      </div>
                      <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1.5 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      Published on <time dateTime="">{currentDate}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default AddPost;
