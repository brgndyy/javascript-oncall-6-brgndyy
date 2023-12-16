import CONDITION from '../constants/conditions/condition.js';
import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';

class DayValidator {
  static validateDay(day) {
    if (!CONDITION.all_day.includes(day)) {
      throw new AppError(ERROR_MESSAGES.invalid_value);
    }
  }
}

export default DayValidator;
