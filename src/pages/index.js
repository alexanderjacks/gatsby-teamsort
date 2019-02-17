import React from 'react'
import { kebabCase, startCase } from 'lodash'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container"
              style={{  
                        background: `linear-gradient(to top, black, navy, steelblue, #cdf)`,
                  }}
          >
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">All Fantasy War Tactics Heroes</h1>
            </div>
            {/* blog posts function as hero info, boilerplate world */}
            {posts
              .map(({ node: post }) => (
                <div
                  className="content is-vcentered"
                  style={{  margin: `1.4rem`,
                            padding: `1.4rem`,
                            border: `1.5px grey solid`,
                            borderRadius: `1.2rem`,
                            background: `radial-gradient(white, snow, beige)`,
                  }}
                  key={post.id}
                >
                  <Link className="is-size-2 has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                    <div
                      id="___gatsby"
                      dangerouslySetInnerHTML={{ __html: post.html}}
                    />
                  </Link>
                  <div
                    className="container column is-10 is-offset-1"
                    style={{  
                              padding: `0.6rem`,
                              border: `2px blue solid`,
                              borderRadius: `1.1rem`
                    }}
                  >
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`}
                            className="tile"
                            style={{  margin: `0.4rem`,
                                      padding: `0.4rem`,
                                      flex: 1,
                                      border: `2px red solid`,
                                      borderRadius: `1.1rem` }}
                        >
                          <Link to={`/tags/${kebabCase(tag)}/`}>{`${startCase(tag)}`}</Link>
                        </span>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
          }
        }
      }
    }
  }
`
