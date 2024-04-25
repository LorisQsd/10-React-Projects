import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import japan1 from '../assets/images/japan1.webp';
import japan2 from '../assets/images/japan2.webp';
import japan3 from '../assets/images/japan3.webp';
import japan4 from '../assets/images/japan4.webp';
import japan5 from '../assets/images/japan5.webp';
import { useState } from 'react';
import useInterval from '../hooks/useInterval';

import SliderButton from '../components/buttons/SliderButton';

// Ce slider fait vraiment du rendu conditionnel et non du css conditionnel

export default function Slider() {
  const images = [japan1, japan2, japan3, japan4, japan5];

  const [current, setCurrent] = useState(1);

  // Delay in milliseconds
  const DELAY = 5000;
  useInterval(
    () => {
      handleNextClick();
    },
    DELAY,
    current
  );

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
        <SliderButton onClick={handlePrevClick} Icon={SlArrowLeft} />

        <img
          className="h-64 w-96"
          src={images[current - 1]}
          alt="Slider Image"
        />

        <SliderButton onClick={handleNextClick} Icon={SlArrowRight} />
      </div>
    </section>
  );
}
