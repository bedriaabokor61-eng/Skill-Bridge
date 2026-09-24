import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home/Home";
import Herosection from "./Pages/HomeSections/Herosection";
function App() {


  return (
    <div>
    <Navbar />
    <Herosection />
    <Footer />
    <Home />
    

    </div>
  
  )
}

export default App
