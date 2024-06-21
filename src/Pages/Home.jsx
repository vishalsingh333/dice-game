import logo from '../assets/dices.png';
import { NavLink, } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <div className='home-container'>
            <div className='logo-img'>
                <img src={logo} alt='dices' height="522px" width="649px" />
            </div>
            <div className='side-content'>
                <h2>DICE GAME</h2>
                <NavLink to='/game'>
                    <button className='play-now-btn'>Play Now</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;