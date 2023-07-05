import React, { useState } from "react";

export const Slider = ({ items, Heading }) => {
  const [data, setData] = useState(items.review);
  const [curSlide, setCurSlide] = useState(0);
  console.log(setData);

  const checkIndex = (position) => {
    if (position > data.length - 1) {
      return 0;
    } else if (position < 0) {
      return data.length - 1;
    }
    return position;
  };

  const nextSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide + 1;
      return checkIndex(newSlide);
    });
  };
  const prevSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide - 1;
      return checkIndex(newSlide);
    });
  };
  return <div>Slider</div>;
};
