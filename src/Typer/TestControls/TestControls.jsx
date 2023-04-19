import './TestControls.css'

export default function TestControls () {
  return (
    <div id='testControls' className='flex-center'>
      <StartTest />
      <RestartTest />
    </div>
  )
}

function RestartTest () {
  return <button>restart test</button>
}
function StartTest () {
  return <button>start new test</button>
}
