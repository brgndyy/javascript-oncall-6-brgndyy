import SPECIAL_HOLIDAY from '../database/holiday.js';

const isSpecialHoliday = (month, date) => {
  return SPECIAL_HOLIDAY.some((holiday) => holiday.month === month && holiday.day === date);
};

export default isSpecialHoliday;
