import DayValidator from '../../src/validators/DayValidator.js';
import AppError from '../../src/error/AppError.js';
import ERROR_MESSAGES from '../../src/constants/messages/errorMessage.js';
import CONDITION from '../../src/constants/conditions/condition.js';

describe('DayValidator', () => {
  describe('validateDay', () => {
    it('유효한 값을 입력한다면 에러를 throw 하지 않는다.', () => {
      const validDay = CONDITION.all_day[0];
      expect(() => {
        DayValidator.validateDay(validDay);
      }).not.toThrow();
    });

    it('유효하지 않은 값을 입력한다면 에러를 throw한다.', () => {
      const invalidDay = '421';
      expect(() => {
        DayValidator.validateDay(invalidDay);
      }).toThrow(AppError);
      expect(() => {
        DayValidator.validateDay(invalidDay);
      }).toThrow(ERROR_MESSAGES.invalid_value);
    });
  });
});
