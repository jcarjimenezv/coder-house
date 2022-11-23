const moment = require("moment");

const getCurrentDate = () => `Hoy es ${moment().format("DD/MM/YYYY")}`;
const getDateOfBirth = (date) => `Nací el ${moment(date).format("DD/MM/YYYY")}`;
const getDiffYears = (date) =>
  `Desde mi nacimiento han pasado ${moment().diff(date, "years")} años`;
const getDiffDays = (date) =>
  `Desde mi nacimiento han pasado ${moment().diff(date, "days")} días`;

const printDatesInformation = (date) => {
  const information = {
    today: getCurrentDate(),
    birthday: getDateOfBirth(date),
    diffYears: getDiffYears(date),
    diffDays: getDiffDays(date),
  };
  Object.values(information).forEach((date) => console.log(date));
};

printDatesInformation(new Date("03/02/1988"));
