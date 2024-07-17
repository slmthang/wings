
import './Header.scss';
import IconImg from '../assets/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Header({headerName = ''}) {

    return (
        <>
            <div id="header" className='center'>
                <img src={IconImg} alt="icon image" id="icon" />
                <h1 id="header-name">{headerName}</h1>
                <button id="burg-menu-btn">
                    <FontAwesomeIcon icon={faBars} className='fa'/>
                </button>
            </div>
        </>
    )
}