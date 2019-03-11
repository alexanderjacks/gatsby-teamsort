import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Content, { HTMLContent } from '../components/Content'

import VectorImage1 from '../img/vector_1.png'
import VectorImage2 from '../img/vector_2.png'
import VectorImage3 from '../img/vector_3.png'
import VectorImage4 from '../img/vector_4.png'

export const MakingofPageTemplate = ({ 
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
              <h3>
                Use: click on a hero's tag to find other heroes with that trait.
              </h3>
              <p>
                Sixteen tags exist to cover hero type, favorite terrain, and hero property. All 104 heroes have ally tags that link back and forth.
              </p>
            </div>
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              <div className="column is-6">
                <img 
                  src={VectorImage1} 
                  style={{
                    width: '240px',
                    display: 'inline-block',
                    topMargin: '1.6em',
                  }}
                />
                <p>
                  A spreadsheet saved to Comma Separated Values (CSV) format starts off our mock database. Saving compute power and money with an abstracted database is cool!
                </p>
              </div>
              <div className="column is-6">
                <img 
                  src={VectorImage2} 
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                />
                <p>
                  Python script cleans the CSV data, formatting into Markdown syntax item by item and creating a file (*.md) for the data on each line.
                </p>
              </div>
              <div className="column is-6">
                <img 
                  src={VectorImage3} 
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                />
                <p>
                  Jamstack renders md files as a relational database thanks to the magic of GraphQL, which functions as a data schema even though we're not running a database-- the markdown are static text files, and don't require a database server.
                </p>
              </div>
              <div className="column is-6">
                <img 
                  src={VectorImage4} 
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                />
                <p>
                  Gatsby optimizes the app's code for fastest loading on mobile and delivers the optimized build to the Netlify CD platform. The app functions the same on any device with a web browser, and mimics having a relational database even though it is a bunch of static files crafted into a PWA.
                </p>
              </div>

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

MakingofPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MakingofPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MakingofPageTemplate
        title={frontmatter.title}
        content={frontmatter.html}
        contentComponent={HTMLContent}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

MakingofPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MakingofPage

export const makingofPageQuery = graphql`
  query MakingofPage($id: String!) {
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
