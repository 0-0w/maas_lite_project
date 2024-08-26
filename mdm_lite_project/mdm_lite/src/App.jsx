import { CreateFullPage,CreateFullPageStep } from "@carbon/ibm-products";
import './App.scss'

import WelcomeHeader from './components/welcome/Welcome'
import Devices from './components/devices/Devices'
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <WelcomeHeader name="Scott" />
      <Devices />
      <Footer />
    </>
  )
}

export default App
