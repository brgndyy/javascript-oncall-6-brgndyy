import deepFreeze from '../../utils/deepFreeze.js';

const TARGET_DATA = deepFreeze([
  {
    id: 1,
    month: 5,
    dayToNumber: 1,
    dayToString: '월',
    name: '준팍',
    isHoliday: false,
  },
  {
    id: 1,
    month: 5,
    dayToNumber: 2,
    dayToString: '화',
    name: '도밥',
    isHoliday: false,
  },
  {
    id: 1,
    month: 5,
    dayToNumber: 3,
    dayToString: '수',
    name: '고니',
    isHoliday: false,
  },
  {
    id: 1,
    month: 5,
    dayToNumber: 4,
    dayToString: '목',
    name: '수아',
    isHoliday: false,
  },
  {
    id: 1,
    month: 5,
    dayToNumber: 5,
    dayToString: '금',
    name: '루루',
    isHoliday: true,
  },
]);

export default TARGET_DATA;
