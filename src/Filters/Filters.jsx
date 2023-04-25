import Timer from './Timer/Timer'
import './Filters.css'

export default function Filters ({ config, setConfig, testOnGoing, setTestFinished }) {
  const { time, punctuation, numbers } = config
  function onChange (event) {
    const filtersConfig = { ...config }
    filtersConfig[event.target.name] = event.target.checked
    setConfig(filtersConfig)
  }

  function onChangeTime (event) {
    const filtersConfig = { ...config }
    filtersConfig.time = Number(event.target.value)
    setConfig(filtersConfig)
  }

  return (
    <div id='filters'>
      <Timer config={config} testOnGoing={testOnGoing} setTestFinished={setTestFinished} />
      <div className='filterItems'>
        <TimeFilter time={time} onChange={onChangeTime} />
        <Filter checked={punctuation} name='punctuation' onChange={onChange} />
        <Filter checked={numbers} name='numbers' onChange={onChange} />
        <ResetFilter onClick={() => setConfig({ time: 60, punctuation: false, numbers: false })} />
      </div>
    </div>
  )
}

function TimeFilter ({ time, onChange }) {
  const inputProps = {
    type: 'radio',
    className: 'sr-only',
    name: 'time',
    onChange
  }

  return (
    <>
      <div className='filterItems__item timeFilter'>
        <input {...inputProps} id='time30' checked={time === 30} value={30} />
        <label htmlFor='time30'>30s</label>
      </div>
      <div className='filterItems__item timeFilter'>
        <input {...inputProps} id='time60' checked={time === 60} value={60} />
        <label htmlFor='time60'>60s</label>
      </div>
    </>
  )
}

function Filter (props) {
  const filterId = `${props.name}Filter`
  return (
    <div className={`filterItems__item ${filterId}`}>
      <input className='sr-only' type='checkbox' id={filterId} {...props} />
      <label htmlFor={filterId}>
        {props.name}
      </label>
    </div>
  )
}

function ResetFilter ({ onClick }) {
  return <button onClick={onClick} id='resetFilter'>reset</button>
}
