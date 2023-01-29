class Calendar {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  getQuarter() {
    return Math.floor(this.currentDate.getMonth() / 3 + 1);
  }

  getNextQuarter() {
    if (this.getQuarter() + 1 === 4) {
      return "end of the year";
    }

    return `Q${this.getQuarter() + 1}`;
  }

  getDayNumber() {
    return new Intl.DateTimeFormat("en", { day: "2-digit" }).format(new Date());
  }

  getWeekNumber() {
    const days = Math.floor(
      (this.currentDate.getTime() -
        new Date(this.currentDate.getFullYear(), 0, 1).getTime()) /
        (24 * 60 * 60 * 1000)
    );

    return Math.ceil(days / 7);
  }

  getWeekProgress() {
    const progress = Math.round((this.currentDate.getDay() / 7) * 100);

    if (this.currentDate.getDay() === 0) {
      return 100;
    }

    return progress;
  }

  getQuarterProgress(): number {
    const now = new Date();
    const currentMonth = now.getMonth();
    const quarterStartMonth = Math.floor(currentMonth / 3) * 3;
    const quarterStart = new Date(now.getFullYear(), quarterStartMonth, 1);
    const quarterEnd = new Date(now.getFullYear(), quarterStartMonth + 2, 31);
    const progress = (now.getTime() - quarterStart.getTime()) / (quarterEnd.getTime() - quarterStart.getTime());
    return Math.round(progress * 100);
  }

  getYearProgress() {
    const currentYear = this.currentDate.getFullYear();
    const start = new Date(currentYear, 0, 0).getTime();
    const diff = this.currentDate.getTime() - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    const daysOfTheYear =
      (currentYear % 4 === 0 && currentYear % 100 > 0) || currentYear % 400 == 0
        ? 366
        : 365;
    return Math.floor((day / daysOfTheYear) * 100);
  }

  getDayName() {
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wedneday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return daysOfTheWeek[this.currentDate.getDay()];
  }

  getMonthName() {
    return new Intl.DateTimeFormat("en", { month: "long" }).format(new Date());
  }
}

export default Calendar;
