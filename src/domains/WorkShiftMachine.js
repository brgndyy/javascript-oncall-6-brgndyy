import { converStringDayToNum } from '../utils/convertDay.js';
import ALL_DATE from '../database/allDate.js';
import createCustomCalendar from '../service/createCustomCalendar.js';

class WorkShiftMachine {
  #standardMonth;

  #startDayOfNumber;

  #startDayOfString;

  #totalWorkShiftHistory;

  #totalDaysInMonth;

  #targetCalendar;

  #weekDayEmergencyWorkers;

  #weekendEmergencyWorkers;

  constructor(standardMonth, startDay, weekDayEmergencyWorkers, weekendEmergencyWorkers) {
    this.#standardMonth = standardMonth; // 5
    this.#startDayOfString = startDay; // 금
    this.#weekDayEmergencyWorkers = weekDayEmergencyWorkers;
    this.#weekendEmergencyWorkers = weekendEmergencyWorkers;
    this.#startDayOfNumber = converStringDayToNum(this.#startDayOfString); // 5
    this.#totalDaysInMonth = ALL_DATE.find((month) => month.month === this.#standardMonth).maxDay;
    this.#targetCalendar = createCustomCalendar(this.#standardMonth, this.#startDayOfString);
    this.#totalWorkShiftHistory = [];
  }

  generateTotalWorkShift() {
    let currentWeekDayIndex = 0;
    let currentWeekendIndex = 0;
    let lastWorker = null;
    let lastIsWeekendOrHoliday = false;

    this.#totalWorkShiftHistory = [];

    let i = 0;
    while (i < this.#targetCalendar.length) {
      const targetMonth = this.#targetCalendar[i];
      const isWeekendOrHoliday = targetMonth.isHoliday;
      let worker;

      if (isWeekendOrHoliday) {
        worker = this.#weekendEmergencyWorkers[currentWeekendIndex];
        if (lastIsWeekendOrHoliday === false && lastWorker === worker) {
          this.swapWorkers(this.#weekendEmergencyWorkers, currentWeekendIndex);
          // Reset and restart the loop
          i = 0;
          currentWeekDayIndex = 0;
          currentWeekendIndex = 0;
          lastWorker = null;
          lastIsWeekendOrHoliday = false;
          this.#totalWorkShiftHistory = [];
          continue;
        }
        lastWorker = worker;
        lastIsWeekendOrHoliday = true;
        currentWeekendIndex = (currentWeekendIndex + 1) % this.#weekendEmergencyWorkers.length;
      } else {
        worker = this.#weekDayEmergencyWorkers[currentWeekDayIndex];
        if (lastIsWeekendOrHoliday === true && lastWorker === worker) {
          this.swapWorkers(this.#weekDayEmergencyWorkers, currentWeekDayIndex);
          // Reset and restart the loop
          i = 0;
          currentWeekDayIndex = 0;
          currentWeekendIndex = 0;
          lastWorker = null;
          lastIsWeekendOrHoliday = false;
          this.#totalWorkShiftHistory = [];
          continue;
        }
        lastWorker = worker;
        lastIsWeekendOrHoliday = false;
        currentWeekDayIndex = (currentWeekDayIndex + 1) % this.#weekDayEmergencyWorkers.length;
      }

      this.#totalWorkShiftHistory.push({
        month: this.#standardMonth,
        date: targetMonth.date,
        dayToNumber: targetMonth.dayToNumber,
        dayToString: targetMonth.dayToString,
        name: worker,
        isHoliday: isWeekendOrHoliday,
      });

      i++;
    }

    return this.#totalWorkShiftHistory;
  }

  swapWorkers(workers, index) {
    const nextIndex = (index + 1) % workers.length;
    [workers[index], workers[nextIndex]] = [workers[nextIndex], workers[index]];
  }
}

export default WorkShiftMachine;
