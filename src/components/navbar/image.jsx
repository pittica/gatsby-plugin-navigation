import React, { Fragment } from "react"
import PropTypes from "prop-types"

export default function Image({ title, image, width, height }) {
  if (image) {
    return <img src={image} alt={title} width={width} height={height} />
  } else {
    return <Fragment>{title}</Fragment>
  }
}

Image.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
