import CONDITION from '../constants/conditions/condition.js';

export const converStringDayToNum = (stringDay) => {
  return CONDITION.all_day.indexOf(stringDay);
};

export const converNumberDayToString = (numberDay) => {
  return CONDITION.all_day[numberDay];
};
