import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import CONDITION from '../constants/conditions/condition.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

class EmergencyWokersValidator {
  static validateWokers(workers) {
    EmergencyWokersValidator.validateTotalLength(workers);
    EmergencyWokersValidator.validateIndividualWorkerNameLength(workers);
    EmergencyWokersValidator.validateDuplication(workers);
  }

  static validateTotalLength(workers) {
    if (
      workers.length < CONDITION.min_workers_length ||
      workers.length > CONDITION.max_workers_length
    ) {
      throw new AppError(ERROR_MESSAGES.invalid_value);
    }
  }

  static validateIndividualWorkerNameLength(workers) {
    workers.forEach((name) => {
      if (
        name.length < CONDITION.min_worker_name_length ||
        name.length > CONDITION.max_worker_name_length
      ) {
        throw new AppError(ERROR_MESSAGES.invalid_value);
      }

      if (name.includes(DELIMITER.space)) {
        throw new AppError(ERROR_MESSAGES.invalid_value);
      }
    });
  }

  static validateDuplication(workers) {
    if (workers.length !== new Set([...workers]).size) {
      throw new AppError(ERROR_MESSAGES.invalid_value);
    }
  }

  static validateWeekendWorkers(weekdayWorkers, weekendWorkers) {
    EmergencyWokersValidator.validateTotalLength(weekendWorkers);
    EmergencyWokersValidator.validateIndividualWorkerNameLength(weekendWorkers);
    EmergencyWokersValidator.validateDuplication(weekendWorkers);
    EmergencyWokersValidator.validateComparedWeekdayAndWeekendWorkers(
      weekdayWorkers,
      weekendWorkers,
    );
  }

  static validateComparedWeekdayAndWeekendWorkers(weekdayWorkers, weekendWorkers) {
    const sortedWeekdayWorkers = [...weekdayWorkers].sort();
    const sortedWeekendWorkers = [...weekendWorkers].sort();

    if (sortedWeekdayWorkers.join(DELIMITER.comma) !== sortedWeekendWorkers.join(DELIMITER.comma)) {
      throw new AppError(ERROR_MESSAGES.invalid_value);
    }
  }
}

export default EmergencyWokersValidator;
