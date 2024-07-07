// change day

var currentDate = new Date();
currentDate.setDate(currentDate.getDate());
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = day;
document.getElementById("dateElement").innerHTML = formattedDate;

// **************************************************************************

var current_date = new Date();
current_date.setDate(current_date.getDate() + 1);
var month = new Array(
  "ЯНВАРЯ",
  "ФЕВРАЛЯ",
  "МАРТА",
  "АПРЕЛЯ",
  "МАЯ",
  "ИЮНЯ",
  "ИЮЛЯ",
  "АВГУСТА",
  "СЕНТЯБРЯ",
  "ОКТЯБРЯ",
  "НОЯБРЯ",
  "ДЕКАБРЯ"
);

// var month = new Array(
//   'СІЧНЯ',
//   'ЛЮТОГО',
//   'БЕРЕЗНЯ',
//   'КВІТНЯ',
//   'ТРАВНЯ',
//   'ЧЕРВНЯ',
//   'ЛИПНЯ',
//   'СЕРПНЯ',
//   'ВЕРЕСНЯ',
//   'ЖОВТНЯ',
//   'ЛИСТОПАДА',
//   'ГРУДНЯ'
// );
document.getElementById("monthElement").innerHTML =
  month[current_date.getMonth()];

// var month = new Array(
//   '01',
//   '02',
//   '03',
//   '04',
//   '05',
//   '06',
//   '07',
//   '08',
//   '09',
//   '10',
//   '11',
//   '12'
// );
