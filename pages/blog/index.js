import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";

function Blog() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-2">
      <Navbar />
      <div className="max-w-screen-xl px-4 md:px-16 mx-auto py-4 sm:py-6 lg:py-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            My Blog
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <Link href="/blog/123">
              <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </picture>
              </a>
            </Link>

            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <Link href="/blog/123">New trends in Tech</Link>
              </h2>

              <p className="text-gray-500 mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                    <picture>
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        className="w-full h-full object-cover object-center"
                      />
                    </picture>
                  </div>

                  <div>
                    <span className="block text-indigo-500">Mike Lane</span>
                    <span className="block text-gray-400 text-sm">
                      July 19, 2021
                    </span>
                  </div>
                </div>

                <span className="text-gray-500 text-sm border rounded px-2 py-1">
                  Article
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <Link href="/blog/123">
              <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </picture>
              </a>
            </Link>

            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <Link href="/blog/123">Working with legacy stacks</Link>
              </h2>

              <p className="text-gray-500 mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                    <picture>
                      <img
                        src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by peter bucks"
                        className="w-full h-full object-cover object-center"
                      />
                    </picture>
                  </div>

                  <div>
                    <span className="block text-indigo-500">Jane Jackobs</span>
                    <span className="block text-gray-400 text-sm">
                      April 07, 2021
                    </span>
                  </div>
                </div>

                <span className="text-gray-500 text-sm border rounded px-2 py-1">
                  Article
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <Link href="/blog/123">
              <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </picture>
              </a>
            </Link>

            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <Link href="/blog/123">10 best smartphones for devs</Link>
              </h2>

              <p className="text-gray-500 mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                    <picture>
                      <img
                        src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Jassir Jonis"
                        className="w-full h-full object-cover object-center"
                      />
                    </picture>
                  </div>

                  <div>
                    <span className="block text-indigo-500">Tylor Grey</span>
                    <span className="block text-gray-400 text-sm">
                      March 15, 2021
                    </span>
                  </div>
                </div>

                <span className="text-gray-500 text-sm border rounded px-2 py-1">
                  Article
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <Link href="/blog/123">
              <a className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </picture>
              </a>
            </Link>

            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <Link href="/blog/123">8 High performance Notebooks</Link>
              </h2>

              <p className="text-gray-500 mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                    <picture>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Aiony Haust"
                        className="w-full h-full object-cover object-center"
                      />
                    </picture>
                  </div>

                  <div>
                    <span className="block text-indigo-500">Ann Park</span>
                    <span className="block text-gray-400 text-sm">
                      January 27, 2021
                    </span>
                  </div>
                </div>

                <span className="text-gray-500 text-sm border rounded px-2 py-1">
                  Article
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
