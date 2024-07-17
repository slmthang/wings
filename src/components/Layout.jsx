
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './Layout.scss';

export default function Layout() {

    return (
        <div id="main-app" className='center'>
            <Header headerName='example'/>
            <Main />
            <Footer />
        </div>
    )
}