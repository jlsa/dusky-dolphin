import React from 'react';

type SliderButtonProps = {
  elementId: string,
  direction: string,
  label: string
}

const SliderButton = ({elementId, direction, label}: SliderButtonProps) => {
  return (
    <div className={`slider__arrow-${direction}`}>
      <span
        className='arrow'
        onClick={() => {
          const element = document.getElementById(elementId);
          if (element) {
            if (direction === 'left') {
              element.scrollLeft -= (window.innerWidth - 80)
            } else {
              element.scrollLeft += (window.innerWidth - 80)
            }
          }
        }}
      >{label}</span>
    </div>
  );
}

export default SliderButton