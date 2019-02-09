import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'

import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}
          style={{  margin: `1.4rem`,
                    padding: `1.4rem`,
                    border: `1.5px grey solid`,
                    borderRadius: `1.2rem` }}
      >
        <Link to={post.node.fields.slug}
              className="columns"
        >
          <h4 className="column is-size-4">{post.node.frontmatter.description}</h4>
          <h2 className="column is-size-2">{post.node.frontmatter.title}</h2>
          <div className="column is-size-6">
            {post.node.frontmatter.tags.map(tag => (
              <span key={tag + `tag`}
                  style={{  margin: `0.8rem`,
                            padding: `0.8rem`,
                            border: `1px teal solid`,
                            borderRadius: `0.8rem` }}
              >
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </span>
            ))}
          </div>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }
  }
`
