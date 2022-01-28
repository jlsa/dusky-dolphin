import React from 'react';

type ShelveItemProps = {
  src: string,
  caption: string
}

const ShelveItem = ({ src, caption }: ShelveItemProps) => {
  return (
    <figure className="card">
      <img src={src} alt='' />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default ShelveItem;