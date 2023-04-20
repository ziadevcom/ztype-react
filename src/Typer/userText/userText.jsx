import { useRef } from 'react'
import './userText.css'

export default function userText ({ userText, onUserTextChange, testOnGoing }) {
  const inputRef = useRef()
  if (testOnGoing) inputRef.current.focus()

  return (
    <div id='userTypedText' className='sr-only'>
      <label htmlFor='userTypedText__input'>Start typing the text you see on the screen</label>
      <input ref={inputRef} type='text' id='userTypedText__input' value={userText} onChange={onUserTextChange} />
    </div>
  )
}
