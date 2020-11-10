import React from 'react';
import './styles/appStyles.css'
import Header from "../header/Header";

const App = () => {
    return (
        <div className='app-main-container'>
            <div className='header'>
                <Header />
            </div>
            <div className='body'></div>
            <div className='footer'></div>
        </div>
    )
};

export default App;
