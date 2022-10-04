import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from './MainNav';

const Header = () => {
    return (
        <header className='Header'>
            <div className="container">
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo_b.png"} alt="" />
                    </Link>
                </h1>
                <div className="gnb">
                    <MainNav />
                </div>
                <div className="icon">
                    <i className='xi-bars'></i>
                </div>
            </div>
        </header>
    )
}

export default Header;