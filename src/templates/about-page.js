import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ 
  title, 
  content, 
  contentComponent, 
  intro 
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-1 has-text-weight-bold is-bold-light">
                TEAMSORT helps quickly move through hero metadata
              </h1>
              <p>
                Use: click on a hero's tag to find other heroes with that trait.
              </p>
              <p>
                Sixteen tags exist to cover hero type, favorite terrain, and hero property. All 104 heroes have ally tags that link back and forth.
              </p>
            </div>
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <Features gridItems={intro.blurbs} />
              <PageContent className="content" content={content} />
            </div>
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              <a href="https://www.alexanderjacks.info">Alexander Jacks</a>, MIT 2019
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        content={frontmatter.html}
        contentComponent={HTMLContent}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
