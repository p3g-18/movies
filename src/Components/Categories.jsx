import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Categories = ({ title, movies }) => {
  const sliderRef = useRef(null);

  if (!Array.isArray(movies)) {
    //if the movie is not an array then return from here
    return <p>Invalid movies data</p>;
  }

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div>
      <h1 className="text-3xl px-12 py-4 text-white">{title}</h1>
      <div className="flex items-center w-max-screen">
        {movies.length >= 7 && (
          <div
            className="flex items-center justify-center w-16 h-16 cursor-pointer opacity-50 hover:opacity-100 text-gray-600"
            onClick={slideLeft}
          >
            <MdChevronLeft size={48} />
          </div>
        )}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none"
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                id={movie.id}
                backdropPath={movie.backdrop_path}
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
        {movies.length >= 7 && (
          <div
            className="flex items-center justify-center w-16 h-16 cursor-pointer opacity-50 hover:opacity-100 text-gray-600"
            onClick={slideRight}
          >
            <MdChevronRight size={48} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
