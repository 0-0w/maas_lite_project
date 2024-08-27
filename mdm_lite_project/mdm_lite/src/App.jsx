import './App.scss'

import WelcomeHeader from './components/welcome/Welcome'
import Devices from './components/devices/Devices'
import Footer from "./components/common/footer/Footer";
import CustomPageHeader from './components/common/customHeader/CustomPageHeader';

function App() {
  return (
    <>
      <WelcomeHeader />
      <CustomPageHeader title={"Welcome Scott"} />
      <Devices />
      <Footer />
    </>
  )
}

export default App
