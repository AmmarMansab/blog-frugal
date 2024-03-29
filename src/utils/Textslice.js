// textUtils.js

export const sliceText = (text, maxLength) =>
  text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

