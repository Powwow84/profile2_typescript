import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navBar'
import Home from './components/home/home'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import About from './components/about/about'

function App() {
  return(
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route 
          path='/projects'
          element={<Projects />}
        />
        <Route 
        path='/about'
        element={<About />}
        />
        <Route 
        path='/contact'
        element={<Contact />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
