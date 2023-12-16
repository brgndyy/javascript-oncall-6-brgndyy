import SPECIAL_HOLIDAY from '../database/holiday.js';
import CONDITION from '../constants/conditions/condition.js';

const isHoliday = (month, day, dayToNumber) => {
  if (dayToNumber === 6 || dayToNumber === 0) {
    return true;
  }
  return SPECIAL_HOLIDAY.some((holiday) => holiday.month === month && holiday.day === day);
};

const createDayEntry = (month, day, dayToNumber) => ({
  month,
  date: day,
  dayToString: CONDITION.all_day[dayToNumber],
  dayToNumber,
  isHoliday: isHoliday(month, day, dayToNumber),
});

const createCustomCalendar = (month, startDayString) => {
  const daysInMonth = CONDITION.all_month_days[month - 1];
  let dayToNumber = CONDITION.all_day.indexOf(startDayString);

  const calendar = [];
  for (let day = 1; day <= daysInMonth; day++) {
    calendar.push(createDayEntry(month, day, dayToNumber));
    dayToNumber = (dayToNumber + 1) % 7;
  }

  return calendar;
};

export default createCustomCalendar;
