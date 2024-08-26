import './App.scss'

import WelcomeHeader from './components/welcome/Welcome'
import Devices from './components/devices/Devices'
import Footer from "./components/common/footer/Footer";
import CustomPageHeader from './components/common/customHeader/CustomPageHeader';

// import { Grid } from '@carbon/react';
function App() {
  return (
    <>
      <WelcomeHeader/>
      <CustomPageHeader />
      <Devices />
      <Footer />
    </>
  )
}

export default App
