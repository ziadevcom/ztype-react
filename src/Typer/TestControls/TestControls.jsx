import './TestControls.css'

export default function TestControls ({ testOnGoing, onClickStartTest }) {
  return (
    <div id='testControls' className='flex-center'>
      <button onClick={onClickStartTest}>start new test</button>
      <button>restart test</button>
    </div>
  )
}

// function RestartTest () {
//   return <button>restart test</button>
// }
// function StartTest () {
//   return <button disabled={testOnGoing}>start new test</button>
// }
