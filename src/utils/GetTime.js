export const getTime = (timeStamp) => {
  const hour = new Date(timeStamp).getHours();
  const minute = new Date(timeStamp).getMinutes();

  return `${hour}:${minute}`;
};
