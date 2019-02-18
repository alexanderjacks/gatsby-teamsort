import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase, startCase, lowerCase, camelCase } from 'lodash'
import slugify from 'slugify'

import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import alex from '../img/Alex_sm.png'
import alfred from '../img/Alfred_sm.png'
import amora from '../img/Amora_sm.png'
import angela from '../img/Angela_sm.png'
import aran from '../img/Aran_sm.png'
import azrael from '../img/Azrael_sm.png'
import baeksa from '../img/Baeksa_sm.png'
import banshee from '../img/Banshee_sm.png'
import bearman from '../img/Bearman_sm.png'
import belle from '../img/Belle_sm.png'
import camelia from '../img/Camelia_sm.png'
import camilla from '../img/Camilla_sm.png'
import carrot from '../img/Carrot_sm.png'
import catSidhe from '../img/Cat Sidhe_sm.png'
import celestial from '../img/Celestial_sm.png'
import chenny from '../img/Chenny_sm.png'
import chris from '../img/Chris_sm.png'
import churyeok from '../img/Churyeok_sm.png'
import cleo from '../img/Cleo_sm.png'
import deborah from '../img/Deborah_sm.png'
import deimos from '../img/Deimos_sm.png'
import dolores from '../img/Dolores_sm.png'
import dominique from '../img/Dominique_sm.png'
import elektra from '../img/Elektra_sm.png'
import endorsiJahad from '../img/Endorsi Jahad_sm.png'
import eunwol from '../img/Eunwol_sm.png'
import evan from '../img/Evan_sm.png'
import frankenstein from '../img/Frankenstein_sm.png'
import fruel from '../img/Fruel_sm.png'
import gillan from '../img/Gillan_sm.png'
import hella from '../img/Hella_sm.png'
import henry from '../img/Henry_sm.png'
import heuksa from '../img/Heuksa_sm.png'
import hongyeom from '../img/Hongyeom_sm.png'
import ian from '../img/Ian_sm.png'
import ildo from '../img/Ildo_sm.png'
import jack from '../img/Jack_sm.png'
import jakyak from '../img/Jakyak_sm.png'
import jenny from '../img/Jenny_sm.png'
import jin from '../img/Jin_sm.png'
import jinKisaragi from '../img/Jin Kisaragi_sm.png'
import Jinyo from '../img/Jinyo_sm.png'
import jai from '../img/Kai_sm.png'
import khunAgueroAgnes from '../img/Khun Aguero Agnes_sm.png'
import kitty from '../img/Kitty_sm.png'
import klein from '../img/Klein_sm.png'
import krut from '../img/Krut_sm.png'
import kyKiske from '../img/Ky Kiske_sm.png'
import lance from '../img/Lance_sm.png'
import lee from '../img/Lee_sm.png'
import lena from '../img/Lena_sm.png'
import lilid from '../img/Lilid_sm.png'
import lily from '../img/Lily_sm.png'
import lucas from '../img/Lucas_sm.png'
import luminous from '../img/Luminous_sm.png'
import lynn from '../img/Lynn_sm.png'
import mary from '../img/Mary_sm.png'
import mas from '../img/Mas_sm.png'
import may from '../img/May_sm.png'
import mercedes from '../img/Mercedes_sm.png'
import moa from '../img/Moa_sm.png'
import momo from '../img/Momo_sm.png'
import mu from '../img/Mu_sm.png'
import muang from '../img/Muang_sm.png'
import muzaka from '../img/Muzaka_sm.png'
import nirvana from '../img/Nirvana_sm.png'
import noel from '../img/Noel_sm.png'
import nox from '../img/Nox_sm.png'
import parsifal from '../img/Parsifal_sm.png'
import persona from '../img/Persona_sm.png'
import phantom from '../img/Phantom_sm.png'
import pinkBean from '../img/Pink Bean_sm.png'
import poni from '../img/Poni_sm.png'
import raboff from '../img/Raboff_sm.png'
import rachel from '../img/Rachel_sm.png'
import rage from '../img/Rage_sm.png'
import ragna from '../img/Ragna_sm.png'
import raizel from '../img/Raizel_sm.png'
import ramlethalValentine from '../img/Ramlethal Valentine_sm.png'
import raskreia from '../img/Raskreia_sm.png'
import reina from '../img/Reina_sm.png'
import ryeogang from '../img/Ryeogang_sm.png'
import sehee from '../img/Sehee_sm.png'
import seira from '../img/Seira_sm.png'
import serendi from '../img/Serendi_sm.png'
import serphina from '../img/Serphina_sm.png'
import shark from '../img/Shark_sm.png'
import shuShu from '../img/Shu Shu_sm.png'
import sione from '../img/Sione_sm.png'
import sogoon from '../img/Sogoon_sm.png'
import solBadguy from '../img/Sol Badguy_sm.png'
import sonicBoom from '../img/Sonic Boom_sm.png'
import spooky from '../img/Spooky_sm.png'
import sraka from '../img/Sraka_sm.png'
import taehwa from '../img/Taehwa_sm.png'
import tao from '../img/Tao_sm.png'
import thanatos from '../img/Thanatos_sm.png'
import twentyfifthBam from '../img/Twentyfifth Bam_sm.png'
import unknown from '../img/Unknown_sm.png'
import valkyrie from '../img/Valkyrie_sm.png'
import woryeong from '../img/Woryeong_sm.png'
import yeka from '../img/Yeka_sm.png'
import yekaterina from '../img/Yekaterina_sm.png'
import yuriJahad from '../img/Yuri Jahad_sm.png'
import zero from '../img/Zero_sm.png'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  allies,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section"
            style={{
                    background: `radial-gradient(gold, papayawhip, snow, white)`,
                    height: `100vh`,
                  }}
    >
      {helmet || ''}
      <div className="container content is-vcentered"
          style={{ background: `radial-gradient(white, snow, beige)`,
                   border: `2px grey solid`,
                   borderRadius: `1.2rem`,
                   alignItems: `center`
          }}
      >
    {/* Begin hero info */}
          <div className="columns column is-12">
            <div className="column">
              {allies && allies.length ? (
              <div style={{ marginTop: `4rem` }} >
                <ul className="taglist columns"
                    style={{  margin: `0.4rem`,
                              border: `2px blue solid`
                    }}
                >
                  {allies.map(ally => (
                    <li key={ally + `ally`}
                        className="column columns"
                        style={{  margin: `0.4rem`,
                                  padding: `1rem`,
                                  border: `2px red solid`,
                                  borderRadius: `1.1rem`,
                                  fontSize: `1.6rem`,
                              }}
                    >
                      <Link 
                        to={`/blog/${lowerCase(slugify(ally, ' '))}/`}
                        className=""
                      >
{/*}
                        <img src={`${camelCase(ally)}`}
                        alt="ally pic" style={{ width: '60px', height: '60px' }}
                        />
*/}
                        <h4>
                          {`${startCase(ally)}`}
                        </h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>
            <div className="column is-6">
              <PostContent content={content} />
              <p>
                <span className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title} - 
                </span>
                <span className="is-size-3">
                  &nbsp;{description}
                </span>
              </p>
            </div>
            <div className="row is-10">
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <ul className="taglist columns"
                    style={{  margin: `0.4rem`,
                              border: `2px blue solid`
                    }}
                >
                  {tags.map(tag => (
                    <li key={tag + `tag`}
                        className="column columns"
                        style={{  margin: `0.4rem`,
                                  padding: `1rem`,
                                  border: `2px red solid`,
                                  borderRadius: `1.1rem`,
                                  fontSize: `1.6rem`,
                               }}
                    >
                      <Link 
                        to={`/tags/${kebabCase(tag)}/`}
                        className="column"
                      >
                        {`${startCase(tag)}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
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
        allies={post.frontmatter.allies}
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
        allies
      }
    }
  }
`
