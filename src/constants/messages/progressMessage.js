import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  read_month_and_start_day: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  read_week_day_emergency_worker: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  read_weekend_emergency_worker: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  holiday: ' (휴일)',
  result: (month, date, dayString, name) => `${month}월 ${date}일 ${dayString} ${name}`,
});

export default PROGRESS_MESSAGE;
