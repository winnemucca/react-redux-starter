import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home </IndexLink>
            {"|"}
            <Link to="/courses" activeClassname="active">Courses</Link>
            {"|"}
            <Link to="/about" activeClassname="active">About</Link>
        </nav>
    );
};

export default Header;