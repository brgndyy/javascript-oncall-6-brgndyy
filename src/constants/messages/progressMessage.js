import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  read_month_and_start_day: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  read_week_day_emergency_worker: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

export default PROGRESS_MESSAGE;
