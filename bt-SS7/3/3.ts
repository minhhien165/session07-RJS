enum WeekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

for (let day in WeekDays) {
  if (isNaN(Number(day))) {
    console.log(day);
  }
}