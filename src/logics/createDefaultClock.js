import ClockData from "./clockData";

export default function createDefaultClock() {
  const date = new Date();
  const timeZone = Math.abs(date.getTimezoneOffset() / 60);
  const userLocation = new ClockData('Your location', timeZone);
  const cityLondon = new ClockData('London', 0);
  const cityMoscow = new ClockData('Moscow', 3);
  const cityTokyo = new ClockData('Tokyo', 9)
  const cityLosAngeles = new ClockData('Los Angeles', -8)

  return [userLocation, cityLondon, cityMoscow, cityTokyo, cityLosAngeles]
}