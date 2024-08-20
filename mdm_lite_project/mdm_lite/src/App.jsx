import { CreateFullPage,CreateFullPageStep } from "@carbon/ibm-products";
import './App.scss'

import WelcomeHeader from './components/welcome/Welcome'
import Devices from './components/devices/Devices'


function App() {
  return (
    <>
      <WelcomeHeader name="Scott" />
      <Devices />
    </>
  )
}

export default App
