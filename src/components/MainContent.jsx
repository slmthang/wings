

import './MainContent.scss';

export default function Main({children}) {

    return (
        <main>
            <div id="content">
                {children}
            </div>
        </main>
    )
}