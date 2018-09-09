import React from 'react'
import Link from 'gatsby-link'
import './Header.scss';

const Header = () => (
    <div className="Header">
        <h1 className="Header-title">
            <Link
              to="/"
              className="Header-link"
            >
              GatsbyJS - Cities Tour
            </Link>
        </h1>
  </div>
)

export default Header
