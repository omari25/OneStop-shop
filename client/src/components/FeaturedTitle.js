import React from 'react';

function FeaturedTitle({ text, className }) {
  return (
    <h1 className={className + " text-3xl text-center text-gray-900 font-semibold"}>
      {text}
    </h1>
  );
}

export default FeaturedTitle;