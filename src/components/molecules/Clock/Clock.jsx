import { Dial, HandHour, HandMinute, HandSecond } from '../../index'

export default function Clock({ item, handleDelete }) {
  const { secondsStartDegree, minutesStartDegree, hoursStartDegree, timeOfDay, city } = item
  return (
    <div className='clock-container'>
      <div className="clock__city-name">{city}</div>
      <button className="clock__delete-clock-button" onClick={() => handleDelete(item)}></button>
      <time className="clock">
        <Dial />
        <HandHour degree={hoursStartDegree} />
        <HandMinute degree={minutesStartDegree} />
        <HandSecond degree={secondsStartDegree} />
        <div className="clock__time-of-day">{timeOfDay}</div>
      </time>
    </div>
  )
}