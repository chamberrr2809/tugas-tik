import React from "react";

import Link from "next/link";

function Navbar({ textColor }) {
  return (
    <div className="px-48 py-3 flex justify-between align-center">
      <div>
        <Link href="/">
          <p
            className={`cursor-pointer group font-bold text-xl text-${textColor}`}
          >
            Chamberrr.
          </p>
        </Link>
        <span className="max-w-0 block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-500 group-hover:max-w-full h-1"></span>
      </div>
      <div className="flex justify-center align-center flex-row gap-5">
        <Link href="/">
          <p
            className={`cursor-pointer group font-semibold text-lg text-${textColor}`}
          >
            Home
            <span className="max-w-0 block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-500 group-hover:max-w-full h-1"></span>
          </p>
        </Link>
        <Link href="/blog">
          <p
            className={`cursor-pointer group font-semibold text-lg text-${textColor}`}
          >
            Blog
            <span className="max-w-0 block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-500 group-hover:max-w-full h-1"></span>
          </p>
        </Link>
        <Link href="/contact-me">
          <p
            className={`cursor-pointer group font-semibold text-lg text-${textColor}`}
          >
            Contact Me
            <span className="max-w-0 block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-500 group-hover:max-w-full h-1"></span>
          </p>
        </Link>
        <Link href="/auth/signin">
          <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 px-3 text-white text-md font-bold rounded-md">
            Open App
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
