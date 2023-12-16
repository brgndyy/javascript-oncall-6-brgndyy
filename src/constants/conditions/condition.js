import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  all_day: ['일', '월', '화', '수', '목', '금', '토'],
  start_month: 1,
  end_month: 12,
});

export default CONDITION;
