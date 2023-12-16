import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

const InputView = {
  async readMonthAndStartDay() {
    const monthAndStartDay = await Console.readLineAsync(PROGRESS_MESSAGE.read_month_and_start_day);

    return monthAndStartDay.split(DELIMITER.comma).map((str) => str.trim());
  },

  async readWeekDayEmergencyWorker() {
    const weekDayEmergencyWorkers = await Console.readLineAsync(
      PROGRESS_MESSAGE.read_week_day_emergency_worker,
    );

    return weekDayEmergencyWorkers.split(DELIMITER.comma).map((person) => person.trim());
  },
};

export default InputView;
