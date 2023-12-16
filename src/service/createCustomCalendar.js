import SPECIAL_HOLIDAY from '../database/holiday.js';

const createCustomCalendar = (month, startDayString) => {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayToString = ['일', '월', '화', '수', '목', '금', '토'];
  const daysInMonth = monthDays[month - 1];
  let dayToNumber = dayToString.indexOf(startDayString);

  const calendar = [];
  for (let day = 1; day <= daysInMonth; day++) {
    let isHoliday = SPECIAL_HOLIDAY.some(
      (holiday) => holiday.month === month && holiday.day === day,
    );

    if (dayToNumber === 6 || dayToNumber === 0) {
      isHoliday = true;
    }

    calendar.push({
      month,
      date: day,
      dayToString: dayToString[dayToNumber],
      dayToNumber,
      isHoliday,
    });

    dayToNumber = (dayToNumber + 1) % 7;
  }

  return calendar;
};

export default createCustomCalendar;
