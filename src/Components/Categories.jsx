import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Categories = ({ title, movies }) => {
  const sliderRef = useRef(null); // useRef hook for cleaner and manageable code

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
      <div className="flex w-max-screen">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-gray-600"
          size={350}
          onClick={slideLeft}
        />
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none"
        >
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p> //shimmer effect
          )}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-gray-600"
          size={350}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Categories;
