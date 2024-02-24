import { createSignal } from 'solid-js'
import { HomeLayout } from './layout/HomeLayout'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      {/* <header>Test</header> */}
      <HomeLayout />
    </>
  )
}

export default App
