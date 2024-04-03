import React from 'react'

function Post({ post }) {
    return (
        <div>
            <div class="flex bg-white border border-gray-300 rounded-md shadow-md -z-10 dark:bg-gray-800 dark:border-gray-700 mx-2 md:mx-auto my-10 max-w-md md:max-w-2xl">
                <div class="flex items-start px-4 py-6">
                    <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src='' alt="avatar" />
                    <div class="">
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-gray-900 -mt-1 text-white">{post.user.username} </h2>
                            {/* <small class="text-sm text-gray-700">22h ago</small> */}
                        </div>
                        {/* <p class="text-gray-700">Joined 12 SEP 2012. </p> */}
                        <h3 class="mt-3 text-gray-700 text-sm text-white">
                            {post.description}
                        </h3>
                        <div className='flex justify-center m-5'>
                        <img src={post.imageURL} alt="image" className='w-1/2'/>
                        </div>
                        <div class="mt-4 flex items-center">
                            <div class="flex mr-2 text-gray-700 text-sm mr-3">
                                <button>
                                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1 text-white" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <span className='text-white'>12</span>
                            </div>
                            <div class="flex mr-2 text-gray-700 text-sm mr-8">
                                <button className=''>
                                    <svg fill="none" viewBox="0 0 24 24" class="text-white w-4 h-4 mr-1" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </button>
                                <span className='text-white'>8</span>
                            </div>
                            <div class="flex mr-2 text-gray-700 text-sm mr-4">
                                <button>
                                    <svg fill="none" viewBox="0 0 24 24" class="text-white w-4 h-4 mr-1" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </button>
                                <span className='text-white'>share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
