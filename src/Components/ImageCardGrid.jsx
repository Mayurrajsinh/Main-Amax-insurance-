import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ img, descri, link = '/' }) => (
  <Link
    to={link}
    className="group bg-white h-[400px] transition-colors duration-200 shadow-md text-center rounded-xl p-6 flex-1 min-w-[200px] cursor-pointer overflow-hidden relative"
  >
    {/* Background Image */}
    <div className="transition-transform duration-300 group-hover:scale-110 w-full h-full mb-4 absolute inset-0">
      <img
        src={`/${img}`}
        alt="feature"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Description Text on Hover */}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold absolute inset-0 z-10 text-white grid place-content-center backdrop-blur h-full w-full">
      {descri}
    </div>
  </Link>
);

const ImageCardGrid = ({ cards }) => (
  <div className="flex gap-2 justify-between flex-wrap mt-10">
    {cards.map(({ img, descri, link }, index) => (
      <ImageCard key={index} img={img} descri={descri} link={link} />
    ))}
  </div>
);

export default ImageCardGrid;
