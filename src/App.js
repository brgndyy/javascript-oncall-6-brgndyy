import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import MonthValidator from './validators/MonthValidator.js';
import DayValidator from './validators/DayValidator.js';
import EmergencyWokersValidator from './validators/EmergencyWorkersValidator.js';

class App {
  #standardMonth;

  #startDay;

  #weekDayEmergencyWorkers;

  #weekendEmergencyWorkers;

  async run() {
    await asyncFunctionHandlerWithError(this.#readMonthAndStartDay, this);
    await asyncFunctionHandlerWithError(this.#readEmergencyWorker, this);
  }

  async #readMonthAndStartDay() {
    const [month, startDay] = await InputView.readMonthAndStartDay();
    MonthValidator.validateMonth(month);
    DayValidator.validateDay(startDay);
    this.#standardMonth = month;
    this.#startDay = startDay;
  }

  async #readEmergencyWorker() {
    this.#weekDayEmergencyWorkers = await InputView.readWeekDayEmergencyWorker();
    EmergencyWokersValidator.validateWokers(this.#weekDayEmergencyWorkers);

    this.#weekendEmergencyWorkers = await InputView.readWeekendEmergencyWorker();
    EmergencyWokersValidator.validateWeekendWorkers(
      this.#weekDayEmergencyWorkers,
      this.#weekendEmergencyWorkers,
    );
  }
}

export default App;
