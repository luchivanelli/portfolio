import '../styles/home.css'
import About from './About';

const Home = ()=> {
    return (
        <div className="home d-flex justify-content-center align-items-center" id="home">
            <div className='home-title'>
                <p>Hi! 👋 I'm <b>Luciana Vanelli</b>,</p>
                <h1>Frontend Developer</h1>
            </div>
            <About/>
        </div>
    )
}

export default Home;