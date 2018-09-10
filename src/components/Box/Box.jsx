import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import './Box.scss';
import Img from 'gatsby-image'

const Box = (props) => {

  const { title, date, author, redirectUrl, description, background } = props;

  console.log(background);

  return (
      <div className="Box">
          <Link
            to={redirectUrl}
            className="Box-link"
          >
              <Img className="Box-cover" sizes={background} />
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
  background: PropTypes.object,
}

export default Box
