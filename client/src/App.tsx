import './App.css'
import { useEffect } from "react"
import api from "./services/api"
import Navbar from './components/Navbar/Navbar'
// import Menu from "./pages/Menu"
const App = () => {

  useEffect(() => {
    api.get("/")
      .then((res) => console.log(res))
      .catch((err) => console.log("Error: ", err))
  }, [])

  return (
    <>

      <Navbar />

        {/* <Menu/> */}



    </>
  )
}

export default App