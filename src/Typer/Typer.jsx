import { useState } from 'react'
import TestText from './TestText/TestText'
import TestControls from './TestControls/TestControls'
import UserText from './userText/userText'

export default function Typer ({ config, testOnGoing, onClickStartTest, userText, onUserTextChange }) {
  return (
    <>
      <UserText userText={userText} onUserTextChange={onUserTextChange} testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} />
      <TestText config={config} userText={userText} testOnGoing={testOnGoing} />
      <TestControls testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} />
    </>
  )
}
