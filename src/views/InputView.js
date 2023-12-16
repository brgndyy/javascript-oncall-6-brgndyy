import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

const InputView = {
  async readMonthAndStartDay() {
    const monthAndStartDay = await Console.readLineAsync(PROGRESS_MESSAGE.read_month_and_start_day);

    return monthAndStartDay.split(DELIMITER.comma);
  },
};

export default InputView;
