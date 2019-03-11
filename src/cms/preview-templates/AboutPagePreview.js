import React from 'react'
import PropTypes from 'prop-types'
import { MakingofPageTemplate } from '../../templates/makingof-page'

const MakingofPagePreview = ({ entry, widgetFor }) => (
  <MakingofPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MakingofPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MakingofPagePreview
