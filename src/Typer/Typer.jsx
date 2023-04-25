import TestText from './TestText/TestText'
import TestControls from './TestControls/TestControls'
import UserText from './userText/userText'

export default function Typer ({ config, testOnGoing, onClickStartTest, userText, onUserTextChange, testFinished }) {
  // Calculate WPM
  // WPM = ((AllTypedEntries / 5) - UncorrectedErrors)) / TimeInMinutes

  return !testFinished &&
    <>
      <UserText userText={userText} onUserTextChange={onUserTextChange} testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} />
      <TestText config={config} userText={userText} testOnGoing={testOnGoing} />
      <TestControls testOnGoing={testOnGoing} onClickStartTest={onClickStartTest} />
    </>
}
