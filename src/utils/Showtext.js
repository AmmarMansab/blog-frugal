import React from 'react'

const Showtext = () => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
      };
  return {truncateText}
}

export default Showtext