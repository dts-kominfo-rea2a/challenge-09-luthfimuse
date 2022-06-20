// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <>
            <div>
                <h1 style={{ color:'#008080' }}>Call a Friend</h1>
                <p style={{ margin:0 }}>Your Friendly Contact App</p>
                <span style={{ color:'#C0392B', fontSize:'25px' }}> -------------------------------------------------------------</span>
            </div>
        </>
    )
}

export default Header;