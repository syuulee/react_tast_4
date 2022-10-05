import { useEffect, useState } from 'react';

const FLINK = [
    { id: 0, name: '기관 바로가기', link: '' },
    { id: 1, name: '과학기술정보통신부', link: 'https://www.hdasan.com/main' },
    {
        id: 2,
        name: '국립전파연구원',
        link: 'https://www.hyundaimovex.com/',
    },
    { id: 3, name: '전파시험인증센터', link: 'http://www.hri.co.kr/' },
    { id: 4, name: '중앙전파관리소', link: 'http://www.hri.co.kr/' },
];

const FamilyLink = () => {
    const [flnk, setflnk] = useState();
    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk]);

    return (
        <select onChange={(e) => setflnk(e.target.value)}>
            {FLINK.map((link) => (
                <option value={link.link} key={link.id}>
                    {link.name}
                </option>
            ))}
        </select>
    );
};

export default FamilyLink;
