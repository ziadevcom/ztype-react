import './Results.css'
export default function Results ({ config, WPM, testFinished }) {
  return (
    <>
      {testFinished &&
        <div id='results'>
          <h2>Results</h2>
          <p className='resultsWPM'>
            WPM: {WPM}
          </p>
          <div className='resultsConfig'>
            <span>{config.numbers}</span><span>{config.punctuation}</span><span>{config.time}</span>
          </div>
        </div>}
    </>
  )
}
