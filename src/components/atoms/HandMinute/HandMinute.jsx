export default function HandMinute({ degree }) {
  return (
    <span className="clock__hand clock__hand--minute">
      <span className="clock__hand--minute-el"
        style={{
          transform: `rotate(${degree}deg)`
        }}></span>
    </span>
  )
}
