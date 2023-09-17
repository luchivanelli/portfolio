import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/index.css'

const App = ()=> {
  return (
    <div className="app">
      {/* <Header/> */}
      <Home/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;
