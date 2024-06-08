import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'

function App() {
  return (
   <Router>
    <NavBar/>
    <Container customClass = 'min_height'>
    <Routes>
    <Route exact path='/' element={<Home/>} /> 
    <Route exact path='/company' element={<Company/>} /> 
    <Route exact path='/contact' element={<Contact/>} /> 
    <Route exact path='/newproject' element={<NewProject/>} /> 
    <Route exact path='/projects' element={<Projects/>} /> 
    </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
