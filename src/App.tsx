import './App.css'
import { GoTop } from './components'
import { ArrowTop } from './icons/icons'

function App() {

  return (
    <>
      <GoTop
        Icon={<ArrowTop />}
        left='10px'
        borderRadius='50px'
        paddingSize='10px'
      />
    </>
  )
}

export default App
