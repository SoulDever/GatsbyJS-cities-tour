import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import './Box.scss';

const Box = (props) => {

  const { title, date, author, redirectUrl, description, background } = props;

  return (
      <div className="Box">
          <Link
            to={redirectUrl}
            className="Box-link"
          >
              <div className="Box-cover" style={{backgroundImage: `url(${background})`}}/>
              <h3 className="Box-title">
                  { title }
              </h3>
              <p className="Box-description">
                { description }
              </p>
          </Link>
      </div>
  )
}

Box.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  redirectUrl: PropTypes.string,
  author: PropTypes.string,
  timeToRead: PropTypes.number,
  background: PropTypes.string,
}

export default Box
