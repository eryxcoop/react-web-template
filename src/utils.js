export function ageOfPersonFromDateString(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export function pluralize(word, count) {
  if (count === 1) {
    return `${count} ${word}`; // Singular form
  } else {
    // Naive approach: Just add 's'
    return `${count} ${word}s`; // Plural form
  }
}