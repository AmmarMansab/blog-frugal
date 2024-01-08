export const formatDate = (inputDate) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export const formatDateTime = (inputDate) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    // timeZoneName: "short",
  };

  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDate;
};

