import React from "react";
import Img from 'gatsby-image';
import Link from 'gatsby-link'
import './Post.scss';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
      <div className="Post">
          <h1 className="Post-title">{post.frontmatter.title}</h1>
          <Img className="Post-cover" sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
          <h4 className="Post-author"><small>by</small> {post.frontmatter.author}</h4>
          <span className="Post-date"><strong>on</strong> {post.frontmatter.date}</span>
          <p className="Post-description" dangerouslySetInnerHTML = {{ __html: post.html }}/>
          <Link className="Post-back" to="/" title="Back to home">Back to home</Link>
      </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        cover_image {
            publicURL
            childImageSharp {
              sizes(maxWidth: 1240 ) {
                srcSet
              }
            }
        }
      }
    }
  }
`;