import './DemoText.css'
import generateText from './textGenerator'

export default function DemoText ({ config }) {
  const demoText = generateText(5, config.punctuation, config.numbers).join(' ')
  return (
    <div id='demoText'>
      <p>{demoText}</p>
    </div>
  )
}
