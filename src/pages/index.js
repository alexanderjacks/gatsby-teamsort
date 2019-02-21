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
                        background: `linear-gradient(to top, black, navy, steelblue, snow, white)`,
                  }}
          >
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">♠ All Fantasy War Tactics Heroes</h1>
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
                            background: `radial-gradient(white, snow, papayawhip)`,
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
                    className="columns"
                    style={{  
                              padding: `0.6rem`,
                              border: `2px maroon solid`,
                              borderRadius: `1.1rem`
                    }}
                  >
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`}
                            className="column 
                            has-text-centered 
                            is-one-third-tablet
                            is-one-quarter-desktop"
                            style={{  
                                      fontSize: `2rem`,
                                      height: `13vh`,
                                      margin: `0.4rem`,
                                      padding: `0.4rem`,
                                      background: `radial-gradient(51% 85%, #8DE0C6 20%, #598B88 86%)`,
                                      border: `3px solid #7BC3B8`,
                                      borderRadius: `1.5rem`,
                                      flex: 1,
                                  }}
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
