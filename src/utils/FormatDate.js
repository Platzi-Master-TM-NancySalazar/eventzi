const FormatDate = (fullDate) => {
  fullDate = fullDate.split("T");
  let time = fullDate[1].split(".");
  time = time[0].split(":");

  let formated = fullDate[0] + " / " + time[0] + ":" + time[1];
  return formated;
};
export default FormatDate;
