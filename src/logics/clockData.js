import { nanoid } from "nanoid";

export default class ClockData {
  constructor(city, timeZone) {
    this.id = nanoid();
    this.city = city;
    this.timeZone = timeZone >= -12 && timeZone <= 14 ? timeZone : 0;

    this.date = new Date();

    this.UTCHours = this.date.getUTCHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.timeOfDay = this.date.getUTCHours()+this.timeZone >= 0 && this.date.getUTCHours()+this.timeZone < 12 ? 'AM' : 'PM';
    
    this.secondsStartDegree = (360 / 60 * this.seconds);
    this.minutesStartDegree = (360 / 60 * this.minutes + 6 / 60 * this.seconds);
    this.hoursForDegree = (this.UTCHours + this.timeZone) > 12 ? this.UTCHours + this.timeZone - 12 : this.UTCHours + this.timeZone
    this.hoursStartDegree = (360 / 12 * this.hoursForDegree + 30 / 60 * this.minutes + 0.5 / 60 * this.seconds);
  }

  refresh() {
    this.date = new Date();
    this.UTCHours = this.date.getUTCHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.timeOfDay = this.date.getUTCHours()+this.timeZone >= 0 && this.date.getUTCHours()+this.timeZone < 12 ? 'AM' : 'PM';

    this.secondsStartDegree = (360 / 60 * this.seconds);
    this.minutesStartDegree = (360 / 60 * this.minutes + 6 / 60 * this.seconds);
    this.hoursForDegree = (this.UTCHours + this.timeZone) > 12 ? this.UTCHours + this.timeZone - 12 : this.UTCHours + this.timeZone
    this.hoursStartDegree = (360 / 12 * this.hoursForDegree + 30 / 60 * this.minutes + 0.5 / 60 * this.seconds);
  }
}