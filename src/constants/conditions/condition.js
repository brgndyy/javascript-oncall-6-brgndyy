import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  all_day: ['일', '월', '화', '수', '목', '금', '토'],
  start_month: 1,
  end_month: 12,
  min_workers_length: 5,
  max_workers_length: 35,
  min_worker_name_length: 1,
  max_worker_name_length: 5,
});

export default CONDITION;
