import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.scss';

import Header from '../components/Header/Header'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="GatsbyJS - Cities Tour"
            meta={[
              { name: 'description', content: 'GatsbyJS Cities Tour using React, MD Files, GraphQL, PostCSS and SASS' },
              { name: 'keywords', content: 'gatsbyjs, react, graphql, postcss, sass' },
            ]}
        />
        <Header />
        <div className="TemplateWrapper">
          {
              children()
          }
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper;