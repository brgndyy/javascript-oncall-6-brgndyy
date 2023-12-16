import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import MonthValidator from './validators/MonthValidator.js';
import DayValidator from './validators/DayValidator.js';

class App {
  async run() {
    await asyncFunctionHandlerWithError(this.#readMonthAndStartDay, this);
  }

  async #readMonthAndStartDay() {
    const [month, startDay] = await InputView.readMonthAndStartDay();
    MonthValidator.validateMonth(month);
    DayValidator.validateDay(startDay);
  }
}

export default App;
