import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLink from './SignedinLink';
import SignedoutLink from './SignedoutLink';

const Navbar = () => {
    return (
        <nav class="nav-wrapper grey darken-3">
            <div class="container">
                <Link to='/' className="brand-logo">Project Manager</Link>
                <SignedinLink />
                <SignedoutLink />
            </div>
         

        </nav>
    )
}
export default Navbar