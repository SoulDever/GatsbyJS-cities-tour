import React from 'react';
import './index.scss';

import Box from '../components/Box/Box';

const IndexPage = ({data}) => {

    return(
        <div className="IndexPage">
            {
                data.allMarkdownRemark.edges.map(({ node }, index) => (
                    <Box
                      key={index}
                      title={node.frontmatter.title}
                      description={node.excerpt}
                      date={node.frontmatter.date}
                      author={node.frontmatter.author}
                      timeToRead={node.timeToRead}
                      background={node.frontmatter.cover_image.publicURL}
                      redirectUrl={node.fields.slug}
                      />
                ))
            }
        </div>
    )
}
export default IndexPage

export const  query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
          author
          cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet, 
                }
              }
          }
        }
        excerpt
        timeToRead
      }
    }
  }
}
`