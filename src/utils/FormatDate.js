const FormatDate = (fullDate) => {
  fullDate = fullDate.split("T");
  let time = fullDate[1].split(".");
  time = time[0].split(":");

  let formated = fullDate[0] + " / " + time[0] + ":" + time[1];
  return formated;
};
const PostFormat = (fullDate) => {
  fullDate = fullDate.split("T");

  let formated = fullDate[0] + " " + fullDate[1]+":00";
  return formated;
};
export default FormatDate;
export {PostFormat};
