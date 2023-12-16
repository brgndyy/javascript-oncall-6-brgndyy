import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import isSpecialHoliday from '../utils/isSpecialHoliday.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const OutputView = {
  printTotalWorkShift(totalWorkShift) {
    totalWorkShift.forEach((workShift) => {
      let dayString = workShift.dayToString;
      if (isSpecialHoliday(workShift.month, workShift.date)) {
        dayString += PROGRESS_MESSAGE.holiday;
      }
      Console.print(
        PROGRESS_MESSAGE.result(workShift.month, workShift.date, dayString, workShift.name),
      );
    });
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
