export const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const WEEKDAY_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ZODIAC_SIGNS = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

export const DAY_GRADIENTS = {
  sunday: "from-rose-500 to-orange-500",
  monday: "from-blue-500 to-cyan-500",
  tuesday: "from-red-500 to-rose-500",
  wednesday: "from-green-500 to-emerald-500",
  thursday: "from-amber-500 to-yellow-500",
  friday: "from-violet-500 to-purple-500",
  saturday: "from-pink-500 to-fuchsia-500",
};

const WEEKDAY_KEYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const ZODIAC_BOUNDARIES = [
  [20, 1],
  [19, 2],
  [20, 3],
  [20, 4],
  [20, 5],
  [20, 6],
  [22, 7],
  [22, 8],
  [22, 9],
  [22, 10],
  [21, 11],
  [21, 0],
];

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function integerDivision(a, b) {
  return Math.floor(a / b);
}

export function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function daysInMonth(year, month) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }

  return 31;
}

export function validateDateParts({ year, month, day }) {
  if (![year, month, day].every(Number.isInteger)) {
    return "Please enter a complete valid date.";
  }

  if (year < 1) {
    return "Year must be 1 or greater.";
  }

  if (month < 1 || month > 12) {
    return "Month must be between 1 and 12.";
  }

  const maxDay = daysInMonth(year, month);

  if (day < 1 || day > maxDay) {
    return `Day must be between 1 and ${maxDay}.`;
  }

  return "";
}

export function zellersWeekday(year, month, day) {
  let adjustedYear = year;
  let adjustedMonth = month;

  if (adjustedMonth < 3) {
    adjustedMonth += 12;
    adjustedYear -= 1;
  }

  const centuryYear = adjustedYear % 100;
  const zeroBasedCentury = integerDivision(adjustedYear, 100);
  const h =
    (day +
      integerDivision(13 * (adjustedMonth + 1), 5) +
      centuryYear +
      integerDivision(centuryYear, 4) +
      integerDivision(zeroBasedCentury, 4) +
      5 * zeroBasedCentury) %
    7;

  return (h + 6) % 7;
}

export function daysFromCivil(year, month, day) {
  const shiftedYear = month <= 2 ? year - 1 : year;
  const era = integerDivision(shiftedYear, 400);
  const yearOfEra = shiftedYear - era * 400;
  const monthIndex = month > 2 ? month - 3 : month + 9;
  const dayOfYear = integerDivision(153 * monthIndex + 2, 5) + day - 1;
  const dayOfEra =
    yearOfEra * 365 +
    integerDivision(yearOfEra, 4) -
    integerDivision(yearOfEra, 100) +
    dayOfYear;

  return era * 146097 + dayOfEra - 719468;
}

export function civilFromDays(days) {
  const shiftedDays = days + 719468;
  const era = integerDivision(shiftedDays, 146097);
  const dayOfEra = shiftedDays - era * 146097;
  const yearOfEra =
    integerDivision(
      dayOfEra -
        integerDivision(dayOfEra, 1460) +
        integerDivision(dayOfEra, 36524) -
        integerDivision(dayOfEra, 146096),
      365,
    );
  const year = yearOfEra + era * 400;
  const dayOfYear =
    dayOfEra -
    (365 * yearOfEra + integerDivision(yearOfEra, 4) - integerDivision(yearOfEra, 100));
  const monthPart = integerDivision(5 * dayOfYear + 2, 153);
  const day = dayOfYear - integerDivision(153 * monthPart + 2, 5) + 1;
  const month = monthPart < 10 ? monthPart + 3 : monthPart - 9;

  return {
    year: month <= 2 ? year + 1 : year,
    month,
    day,
  };
}

export function dayOfYear(year, month, day) {
  let total = 0;

  for (let currentMonth = 1; currentMonth < month; currentMonth += 1) {
    total += daysInMonth(year, currentMonth);
  }

  return total + day;
}

export function isoWeekNumber(year, month, day) {
  const dayCount = daysFromCivil(year, month, day);
  const weekdayIndex = zellersWeekday(year, month, day);
  const isoWeekday = weekdayIndex === 0 ? 7 : weekdayIndex;
  const thursdayCount = dayCount + (4 - isoWeekday);
  const { year: isoYear } = civilFromDays(thursdayCount);
  const januaryFourth = daysFromCivil(isoYear, 1, 4);
  const januaryFourthWeekday = zellersWeekday(isoYear, 1, 4);
  const weekOneMonday = januaryFourth - ((januaryFourthWeekday + 6) % 7);
  const week = integerDivision(thursdayCount - weekOneMonday, 7) + 1;

  return { week, year: isoYear };
}

export function zodiacSign(month, day) {
  const [boundaryDay, currentIndex] = ZODIAC_BOUNDARIES[month - 1];
  const nextIndex = ZODIAC_BOUNDARIES[month % 12][1];
  return ZODIAC_SIGNS[day <= boundaryDay ? currentIndex : nextIndex];
}

export function formatLongDate({ year, month, day, weekdayIndex }) {
  const weekday = typeof weekdayIndex === "number" ? `${WEEKDAY_NAMES[weekdayIndex]}, ` : "";
  return `${weekday}${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}

export function buildCalendarGrid(year, month) {
  const firstWeekday = zellersWeekday(year, month, 1);
  const currentMonthLength = daysInMonth(year, month);
  const previousMonth = month === 1 ? 12 : month - 1;
  const previousMonthYear = month === 1 ? year - 1 : year;
  const previousMonthLength = daysInMonth(previousMonthYear, previousMonth);
  const cells = [];

  for (let offset = firstWeekday - 1; offset >= 0; offset -= 1) {
    cells.push({
      day: previousMonthLength - offset,
      type: "prev",
    });
  }

  for (let date = 1; date <= currentMonthLength; date += 1) {
    cells.push({
      day: date,
      type: "current",
    });
  }

  while (cells.length < 42) {
    cells.push({
      day: cells.length - currentMonthLength - firstWeekday + 1,
      type: "next",
    });
  }

  return cells;
}

export function getDayDetails(year, month, day) {
  const weekdayIndex = zellersWeekday(year, month, day);
  const weekdayKey = WEEKDAY_KEYS[weekdayIndex];
  const isoWeek = isoWeekNumber(year, month, day);

  return {
    year,
    month,
    day,
    weekdayIndex,
    weekdayKey,
    weekdayName: WEEKDAY_NAMES[weekdayIndex],
    dayOfYear: dayOfYear(year, month, day),
    isoWeek: isoWeek.week,
    isoWeekYear: isoWeek.year,
    leapYear: isLeapYear(year),
    zodiac: zodiacSign(month, day),
    calendarGrid: buildCalendarGrid(year, month),
    gradient: DAY_GRADIENTS[weekdayKey],
    dayCount: daysFromCivil(year, month, day),
  };
}

export function addDaysToDate(dateParts, amount) {
  const startCount = daysFromCivil(dateParts.year, dateParts.month, dateParts.day);
  return civilFromDays(startCount + amount);
}

function compareDateParts(a, b) {
  if (a.year !== b.year) {
    return a.year - b.year;
  }

  if (a.month !== b.month) {
    return a.month - b.month;
  }

  return a.day - b.day;
}

export function calculateDateDifference(firstDate, secondDate) {
  const firstCount = daysFromCivil(firstDate.year, firstDate.month, firstDate.day);
  const secondCount = daysFromCivil(secondDate.year, secondDate.month, secondDate.day);
  const signedDays = secondCount - firstCount;
  const absoluteDays = Math.abs(signedDays);
  const start = compareDateParts(firstDate, secondDate) <= 0 ? firstDate : secondDate;
  const end = compareDateParts(firstDate, secondDate) <= 0 ? secondDate : firstDate;

  let years = end.year - start.year;
  let months = end.month - start.month;
  let days = end.day - start.day;

  if (days < 0) {
    months -= 1;
    const borrowMonth = end.month === 1 ? 12 : end.month - 1;
    const borrowYear = end.month === 1 ? end.year - 1 : end.year;
    days += daysInMonth(borrowYear, borrowMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    signedDays,
    absoluteDays,
    wholeWeeks: integerDivision(absoluteDays, 7),
    remainingDaysAfterWeeks: absoluteDays % 7,
    calendarYears: years,
    calendarMonths: months,
    calendarDays: days,
    totalMonths: years * 12 + months,
    isForward: signedDays >= 0,
  };
}

export function normalizeInteger(value) {
  if (value === "" || value === null || value === undefined) {
    return Number.NaN;
  }

  return Number.parseInt(value, 10);
}

export function todayDateParts() {
  const today = new Date();
  const utc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

  return {
    year: utc.getUTCFullYear(),
    month: utc.getUTCMonth() + 1,
    day: utc.getUTCDate(),
  };
}

export function toNativeUtcDate({ year, month, day }) {
  return new Date(Date.UTC(year, month - 1, day));
}

export function wholeDayDifferenceFromNative(first, second) {
  return Math.round((second.getTime() - first.getTime()) / MS_PER_DAY);
}
