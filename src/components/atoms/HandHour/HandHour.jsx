export default function HandHour({ degree }) {
  return (
    <span className="clock__hand clock__hand--hour">
      <span className="clock__hand--hour-el"
      style={{
      transform: `rotate(${degree}deg)`
    }}></span>
    </span>
    )
}
