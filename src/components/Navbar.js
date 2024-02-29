import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Cano Estructuras</div>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
        </div>
        </nav>
    )
}
export default Navbar;