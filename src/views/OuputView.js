import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import isSpecialHoliday from '../utils/isSpecialHoliday.js';

const OutputView = {
  printTotalWorkShift(totalWorkShift) {
    totalWorkShift.forEach((workShift) => {
      let dayString = workShift.dayToString;
      if (isSpecialHoliday(workShift.month, workShift.date)) {
        dayString += ' (휴일)';
      }
      Console.print(`${workShift.month}월 ${workShift.date}일 ${dayString} ${workShift.name}`);
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
