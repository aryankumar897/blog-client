import React from "react";
import poster from "../../img/poster.png";
const HomePage = () => {
  return (
    <>
      <section className="pb-10 bg-gray-800">
        <div className="container relative px-4 mx-auto">
          <div className="flex flex-wrap items-center mb-10 -mx-4 2xl:mb-14">
            <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
              <span className="text-lg font-bold text-blue-400">
                Create posts to educate
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl font-bold text-white 2xl:text-8xl font-heading">
                Pen down your ideas{" "}
                <span className="text-yellow-500">By creating a post</span>
              </h2>
              <p className="mb-12 text-xl text-gray-100 lg:mb-16 2xl:mb-24">
                Your post must be free from racism and unhealthy words
              </p>
              <a
                className="inline-block px-12 py-5 text-lg font-bold text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
                href="/"
              >
                987654321
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <img className="w-full" src={poster} alt={poster} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
