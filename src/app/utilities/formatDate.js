export const formatDate = date => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const tempDate = date.split("-");
  return `${months[parseInt(tempDate[1]) - 1]} ${tempDate[0].substring(2)}`;
};
