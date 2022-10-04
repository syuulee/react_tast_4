import React from 'react'
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <ul>
            <li><Link to='/'>센터소개</Link></li>
            <li><Link to='/'>항공 우주방사선량</Link></li>
            <li><Link to='/'>우주전파환경의 이해</Link></li>
        </ul>
    )
}

export default MainNav;