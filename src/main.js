import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  console.log("Month inside main.js file:",month)
 month = Math.floor(month);
  const year = dayjs().year();
   
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = [];
 
for (let i = 0; i < 6; i++) {
  const week = [];
  for (let j = 0; j < 7; j++) {
    currentMonthCount++;
    week.push(dayjs(new Date(year, month, currentMonthCount)));
  }
  daysMatrix.push(week);
}
 
  console.log("Days matrix is :", daysMatrix)
  return daysMatrix;
}