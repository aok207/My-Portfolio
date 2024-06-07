function getTodayTime() {
  const today = new Date();
  today.setHours(0, 0, 0);

  return today;
}

function getBirthdayTime(birthDate, birthMonth, birthYear) {
  const birthday = new Date();
  birthday.setHours(0, 0, 0);
  birthday.setDate(birthDate);
  birthday.setMonth(birthMonth);
  birthday.setFullYear(birthYear);

  return birthday;
}

export default function getAge(birthDate, birthMonth, birthYear) {
  const today = getTodayTime();
  const birthday = getBirthdayTime(birthDate, birthMonth, birthYear);

  // 1 year = 31536000 seconds
  // 1 second = 1000 miliseconds
  return Math.floor((today - birthday) / (31536000 * 1000));
}
