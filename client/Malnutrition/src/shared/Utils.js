export const getAgeFromDateOfBirth = date => {
  const birthDate = new Date(date);
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
    if (days < 0) {
      const monthDays = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        0,
      ).getDate();
      days += monthDays;
    }
  }
  const age = {
    years: years,
    months: months,
    days: days,
  };
  return age;
};

export const getAge = date => {
  const age = `${getAgeFromDateOfBirth(date).months} months and ${
    getAgeFromDateOfBirth(date).days
  } days`;
  return age;
};
