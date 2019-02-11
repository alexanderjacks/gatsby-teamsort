import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase, startCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="columns column is-10 is-offset-1">
            <div className="column">
              <span className="title is-size-2 has-text-weight-bold is-bold-light">
                {title} - 
              </span>
              <span className="is-size-3">
                &nbsp;{description}
              </span>
            </div>
            <div className="column is-6">
              <h1>Allies Go Here</h1>
            </div>
            <div className="column is-6">
              <PostContent content={content} />
            </div>
            <div className="column">
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}
                        style={{  margin: `2rem`,
                                  padding: `2rem`,
                                  border: `3px teal solid`,
                                  borderRadius: `1.2rem` }}
                    >
                      <Link to={`/tags/${kebabCase(tag)}/`}>{`${startCase(tag)}`}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Details"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
      }
    }
  }
`
