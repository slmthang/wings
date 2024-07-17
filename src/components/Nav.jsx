
import { useState } from 'react';
import homeIcon1 from '../assets/home1.svg';
import homeIcon2 from '../assets/home2.svg';
import plansIcon1 from '../assets/plans1.svg';
import plansIcon2 from '../assets/plans2.svg';
import subscriptionsIcon1 from '../assets/subscriptions1.svg';
import subscriptionsIcon2 from '../assets/subscriptions2.svg';
import statsIcon1 from '../assets/stats1.svg';
import statsIcon2 from '../assets/stats2.svg';

import './Nav.scss';

function NavButton({img1, img2, alt, id, isSelected, selectedBtn}) {

    return (
        <li onClick={selectedBtn}>
            <img src={ isSelected ? img1 : img2 } alt={alt} id={id} className='navIcon'/>
        </li>
    )
}

export default function Nav() {

    const [selectedBtn, setSelectedBtn] = useState(0);

    return (
        <nav>
            <ul>
                <NavButton selectedBtn={() => setSelectedBtn(0)} img1={homeIcon1} img2={homeIcon2} alt='home icon' id='homeIcon' isSelected={ selectedBtn === 0 ? true : false} />
                <NavButton selectedBtn={() => setSelectedBtn(1)} img1={plansIcon1} img2={plansIcon2} alt='plans icon' id='plansIcon' isSelected={ selectedBtn === 1 ? true : false} />
                <NavButton selectedBtn={() => setSelectedBtn(2)} img1={subscriptionsIcon1} img2={subscriptionsIcon2} alt='subscriptions icon' id='subscriptionsIcon' isSelected={ selectedBtn === 2 ? true : false} />
                <NavButton selectedBtn={() => setSelectedBtn(3)} img1={statsIcon1} img2={statsIcon2} alt='stats icon' id='statsIcon' isSelected={ selectedBtn === 3 ? true : false} />
            </ul>
        </nav>
    )
}