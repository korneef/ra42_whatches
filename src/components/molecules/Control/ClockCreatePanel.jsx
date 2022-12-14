export default function ClockCreatePanel({ handleSubmit }) {
  const className = "clock-create-panel__form"
  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`${className}-inputs`}>
        <div className={`${className}-city-name form-element`}>
          <label className={`${className}-city-name-label`} htmlFor="city-name">Введите название города</label>
          <input className={`${className}-city-name-input`} type="text" name="city-name" id="city-name-input" placeholder="City name" required />
        </div>
        <div className={`${className}-timezone form-element`}>
          <label className={`${className}-timezone-label`} htmlFor="city-time-zone-input">Временная зона UTC+</label>
          <input className={`${className}-timezone-input`} type="number" name="city-time-zone-input" id="city-time-zone-input" min={-12} max={14} placeholder='-12 ... +14' required />
        </div>
      </div>
      <button className={`${className}-button`} type="submit">Create new clock!</button>
    </form>
  )
}