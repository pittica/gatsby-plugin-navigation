import React from "react"
import PropTypes from "prop-types"

export default function Image({ title, image, width, height }) {
  if (image) {
    return <img src={image} alt={title} width={width} height={height} />
  } else {
    return title
  }
}

Image.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
