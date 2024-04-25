import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import japan1 from '../assets/images/japan1.avif';
import japan2 from '../assets/images/japan2.avif';
import japan3 from '../assets/images/japan3.avif';
import japan4 from '../assets/images/japan4.avif';
import japan5 from '../assets/images/japan5.avif';
import { useState } from 'react';

export default function Slider() {
  const images = [japan1, japan2, japan3, japan4, japan5];

  const [current, setCurrent] = useState(1);

  const handleNextClick = () => {
    current === images.length ? setCurrent(1) : setCurrent((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    current === 1 ? setCurrent(images.length) : setCurrent((prev) => prev - 1);
  };

  return (
    <section className="px-4">
      <h1 className="text-3xl text-center">Slider React</h1>

      <p className="mt-10 mb-2 text-lg text-center">
        {current} / {images.length}
      </p>

      <div className="flex items-center justify-between max-w-xl mx-auto">
        <button
          className="flex items-center justify-center duration-150 border-2 border-white border-solid rounded-full size-10 hover:scale-105"
          onClick={handlePrevClick}
        >
          <SlArrowLeft />
        </button>

        <img className="h-64 w-96" src={japan1} alt="Slider" />

        <button
          className="flex items-center justify-center duration-150 border-2 border-white border-solid rounded-full size-10 hover:scale-105"
          onClick={handleNextClick}
        >
          <SlArrowRight />
        </button>
      </div>
    </section>
  );
}
