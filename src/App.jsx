// import Navbar from "./layouts/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from "./layouts/Layout/Layout";
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

function App() {

  return (
    <>
      {/* <Router> */}
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Layout>
      {/* </Router> */}

    </>
  )
}

export default App
