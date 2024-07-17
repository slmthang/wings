
import Header from './Header';
import MainContent from './MainContent';
import Nav from './Nav';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    return (
        <div id="main-app">
            <Header headerName='example'/>
            <MainContent >
                <Outlet />
            </MainContent>
            <Nav />
        </div>
    )
}