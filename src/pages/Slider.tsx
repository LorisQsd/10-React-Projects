import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import japan1 from '/images/japan1.webp';
import japan2 from '/images/japan2.webp';
import japan3 from '/images/japan3.webp';
import japan4 from '/images/japan4.webp';
import japan5 from '/images/japan5.webp';
import { useState } from 'react';
import useInterval from '../hooks/useInterval';

import SliderButton from '../components/buttons/SliderButton';

// Ce slider fait vraiment du rendu conditionnel et non du css conditionnel

export default function Slider() {
  const images = [japan1, japan2, japan3, japan4, japan5];

  const [current, setCurrent] = useState(1);

  const toggleImage = (indexPayload: number) => {
    let newState: number;

    if (indexPayload + current > images.length) {
      newState = 1;
    } else if (indexPayload + current < 1) {
      newState = images.length;
    } else {
      newState = indexPayload + current;
    }

    setCurrent(newState);
  };

  // Delay in milliseconds
  const DELAY = 5000;
  useInterval(
    () => {
      toggleImage(1);
    },
    DELAY,
    current
  );

  return (
    <section className="px-4">
      <h1 className="text-3xl text-center">Slider React</h1>

      <p className="mt-10 mb-2 text-lg text-center">
        {current} / {images.length}
      </p>

      <div className="flex items-center justify-between max-w-xl mx-auto">
        <SliderButton onClick={() => toggleImage(-1)} Icon={SlArrowLeft} />

        <img
          className="h-64 w-96"
          src={images[current - 1]}
          alt="Slider Image"
        />

        <SliderButton onClick={() => toggleImage(1)} Icon={SlArrowRight} />
      </div>
    </section>
  );
}
