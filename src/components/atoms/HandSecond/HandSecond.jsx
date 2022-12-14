export default function HandSecond({ degree }) {
  return (
    <span className="clock__hand clock__hand--second">
      <span className="clock__hand--second-el"
        style={{
          transform: `rotate(${degree}deg)`
        }}></span>
    </span>
  )
}

