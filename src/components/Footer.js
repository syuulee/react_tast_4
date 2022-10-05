import React from 'react'
import FamilyLink from './FamilyLink';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container">
                <div className="ft_logo">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="" />
                    </figure>
                    <ul className="ft_me">
                        <li><Link>개인정보처리방침</Link></li>
                        <li><Link>이용약관</Link></li>
                        <li><Link>영상정보처리방침</Link></li>
                        <li><Link>예경보 알림서비스 신청/해지</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>피해사례접수</Link></li>
                    </ul>
                    <div className="link">
                        <FamilyLink />
                    </div>
                </div>
                <div className="ft_bottom">
                    <div className="bottom">
                        <address>63025 제주시 한림읍 귀덕로 198-6</address>
                        <ul>
                            <li>대표전화: 064-797-7011</li>
                            <li>이메일: <span>spaceweather@korea.kr</span></li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    <p>Copyright © Korean Space Weather Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;