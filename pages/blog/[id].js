import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";

const Blog = () => {
  return (
    <>
      <div className="py-3 bg-gradient-to-br from-blue-50 to-blue-100">
        <Navbar />
        <div className="container py-16 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="space-y-6 md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-blue-900 font-bold md:text-5xl">
                This is your great blog title, still static
              </h2>
              <p>Author • DateReleased</p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
            <div className="md:5/12 lg:w-6/12">
              <Image
                src="https://source.unsplash.com/random?size=1000x800"
                alt="image"
                loading="lazy"
                width="1000"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
