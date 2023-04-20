import { useState, useRef } from 'react'
import './TestText.css'
import generateText from './textGenerator'

export default function TestText ({ config, userText }) {
  const [testText, setDemoText] = useState(generateText(5, config.punctuation, config.numbers).join(' ').split(''))

  return (
    <div id='demoText'>
      <p>{testText.map((letter, index) => {
        return <Letter key={index} letter={letter} />
      })}
      </p>
      <DemoTextResult userText={userText} testText={testText} />
    </div>
  )
}

function Letter ({ type, letter, userTypedLetter }) {
  if (!type) return <span>{letter}</span>

  // Logic for letters typed by user
  const classes = []
  if (userTypedLetter !== letter) {
    classes.push('incorrect')
    if (userTypedLetter === ' ') classes.push('space')
  }
  return <span className={classes.join(' ')}>{userTypedLetter}</span>
}

function DemoTextResult ({ userText, testText }) {
  const userTextArr = userText.split('')

  return (
    <p id='demoTextResult'>
      {userTextArr.map((letter, index) => {
        return <Letter type='user' key={index} letter={testText[index]} userTypedLetter={letter} />
      })}
    </p>
  )
}
