import{BrowserRouter as Router  , Route, Routes} from 'react-router-dom'
import './App.css'
import {Header , Footer , Home} from './sections/index';
import {Exercise} from './sectionForExercise/index'
import {Measurements} from './Measurements/index'
const App = () => {
  
   
  
  return (
    <>
    <Router>
    <Header />
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/exercises' element= {<Exercise />}/>
          <Route path='/measurements' element= {<Measurements />}/>
        </Routes>
     <Footer />
    </Router>
    </>
  )
}

export default App