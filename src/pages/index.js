import React from 'react'
import { kebabCase, startCase } from 'lodash'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Alex from '../img/Alex_sm.png'
import Azrael from '../img/Azrael_sm.png'
import Camelia from '../img/Camelia_sm.png'
import Chris from '../img/Chris_sm.png'
import Cleo from '../img/Cleo_sm.png'
import Hella from '../img/Hella_sm.png'
import Hongyeom from '../img/Hongyeom_sm.png'
import Zero from '../img/Zero_sm.png'

import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">All Fantasy War Tactics Heroes</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{  margin: `1.4rem`,
                            padding: `1.4rem`,
                            border: `1.5px grey solid`,
                            borderRadius: `1.2rem`
                  }}
                  key={post.id}
                >
                  <p>
                    <Link className="is-size-2 has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div className="column is-size-6" style={{ listStyleType: 'none' }}>
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`}
                            style={{  margin: `0.8rem`,
                                      padding: `0.8rem`,
                                      border: `1px teal solid`,
                                      borderRadius: `0.8rem` }}
                        >
                          <Link to={`/tags/${kebabCase(tag)}/`}>{`${startCase(tag)}`}</Link>
                        </span>
                      ))}
                  </div>
                  <p className="is-size-4">
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Hero Deets →
                    </Link>
                  </p>
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
          excerpt(pruneLength: 400)
          id
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
