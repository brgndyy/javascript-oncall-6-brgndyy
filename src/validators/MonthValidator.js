import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import CONDITION from '../constants/conditions/condition.js';

class MonthValidator {
  static validateMonth(month) {
    if (
      !/^\d+$/.test(month) ||
      typeof Number(month) !== 'number' ||
      Number(month) < CONDITION.start_month ||
      Number(month) > CONDITION.end_month
    ) {
      throw new AppError(ERROR_MESSAGES.invalid_value);
    }
  }
}

export default MonthValidator;
