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
    this.#totalWorkShiftHistory = [];
    let currentWorkerIndex = { weekday: 0, weekend: 0 };
    let lastWorker = { name: null, isWeekend: null };

    for (let i = 0; i < this.#totalDaysInMonth; i++) {
      const dayInfo = this.#targetCalendar[i];
      const isWeekend = dayInfo.isHoliday;

      const workerGroup = isWeekend ? this.#weekendEmergencyWorkers : this.#weekDayEmergencyWorkers;
      const workerIndex = isWeekend ? currentWorkerIndex.weekend : currentWorkerIndex.weekday;

      const worker = workerGroup[workerIndex];

      if (this.isSameWorkerOnConsecutiveShift(lastWorker, worker, isWeekend)) {
        this.swapWorkers(workerGroup, workerIndex);
        i = -1;
        continue;
      }

      this.#totalWorkShiftHistory.push(this.createShiftEntry(dayInfo, worker, isWeekend));

      lastWorker = { name: worker, isWeekend };
      currentWorkerIndex = this.updateWorkerIndex(currentWorkerIndex, isWeekend);
    }

    return this.#totalWorkShiftHistory;
  }

  isSameWorkerOnConsecutiveShift(lastWorker, currentWorker, isWeekend) {
    return lastWorker.name === currentWorker && lastWorker.isWeekend !== isWeekend;
  }

  createShiftEntry(dayInfo, worker, isWeekend) {
    return {
      month: this.#standardMonth,
      date: dayInfo.date,
      dayToNumber: dayInfo.dayToNumber,
      dayToString: dayInfo.dayToString,
      name: worker,
      isHoliday: isWeekend,
    };
  }

  updateWorkerIndex(currentIndex, isWeekend) {
    if (isWeekend) {
      return {
        ...currentIndex,
        weekend: (currentIndex.weekend + 1) % this.#weekendEmergencyWorkers.length,
      };
    }
    return {
      ...currentIndex,
      weekday: (currentIndex.weekday + 1) % this.#weekDayEmergencyWorkers.length,
    };
  }

  swapWorkers(workers, index) {
    const nextIndex = (index + 1) % workers.length;
    [workers[index], workers[nextIndex]] = [workers[nextIndex], workers[index]];
  }
}

export default WorkShiftMachine;
