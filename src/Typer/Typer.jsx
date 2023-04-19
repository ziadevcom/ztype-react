import DemoText from './DemoText/DemoText'
import TestControls from './TestControls/TestControls'

export default function Typer ({ config }) {
  return (
    <>
      <DemoText config={config} />
      <TestControls />
    </>
  )
}
