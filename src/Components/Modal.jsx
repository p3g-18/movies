import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../utils/movieSlice";
import React from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.movies?.isModalOpen);
  const modalTrailer = useSelector((store) => store.movies?.modalTrailer);

  if (!isModalOpen || !modalTrailer?.key) return null;

  const trailerKey = modalTrailer?.key;

  const videoUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&modestbranding=0&rel=1&showinfo=0`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white w-11/12 md:w-6/12 h-[28%]  md:h-[24%] lg:h-[60%] rounded-lg shadow-lg overflow-hidden">
        <button
          className="absolute top-2 right-2 text-red-600 font-bold"
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>

        <div className="aspect-w-16 aspect-video z-50">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Movie Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
