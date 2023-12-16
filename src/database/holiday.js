import deepFreeze from '../utils/deepFreeze.js';

const SPECIAL_HOLIDAY = deepFreeze([
  {
    id: 1,
    month: 1,
    day: 1,
  },
  {
    id: 2,
    month: 3,
    day: 1,
  },
  {
    id: 3,
    month: 5,
    day: 5,
  },
  {
    id: 4,
    month: 6,
    day: 6,
  },
  {
    id: 5,
    month: 8,
    day: 15,
  },
  {
    id: 6,
    month: 10,
    day: 3,
  },
  {
    id: 7,
    month: 10,
    day: 9,
  },
  {
    id: 8,
    month: 12,
    day: 25,
  },
]);

export default SPECIAL_HOLIDAY;
