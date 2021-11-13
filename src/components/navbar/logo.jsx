import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Image from "./image"

export default function Logo({ title, image, width, height, link }) {
  if (link) {
    return (
      <Link to={link} className="navbar-logo">
        <Image title={title} image={image} width={width} height={height} />
      </Link>
    )
  } else {
    return (
      <span className="navbar-logo">
        <Image title={title} image={image} width={width} height={height} />
      </span>
    )
  }
}

Logo.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
}

Logo.defaultProps = {
  link: "/",
}
