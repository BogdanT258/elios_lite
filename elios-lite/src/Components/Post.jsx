import React from "react";

function Post({ post }) {
  return (
    <div>
      <div className="flex items-center justify-center text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl border-2 border-neutral-800 p-4 my-4">
          <div class="max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div className="text-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                {post.user.username}
              </div>
            </div>


            {/* CONTENT */}
            <div class="py-8">
              <h1 class="text-3xl font-bold mb-2">{post.title}</h1>
            </div>

            <img
              src={post.imageURL}
              alt="Post"
              class="w-full h-auto mb-8"
            />

            <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus varius fringilla augue, vel vestibulum nisl mattis
                vel. Praesent porttitor pharetra purus eu tincidunt.
              </p>
              <p>{post.description}</p>
            </div>
          </div>
          

          {/* LIKES AND COMMENTS */}
          <div className="mt-4 flex justify-between">
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
              <p class="text-gray-500 text-sm">
                Published on <time datetime="2022-04-05">April 5, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
