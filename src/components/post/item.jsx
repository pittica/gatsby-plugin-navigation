import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

export default function Item({ group, slug, title, icon, previous }) {
  let link = ""

  if (group) {
    link += "/" + group
  }

  if (slug) {
    link += "/" + slug
  }

  return (
    <Link
      to={link}
      className={classNames({
        "pagination-previous": previous,
        "pagination-next": !previous,
      })}
      rel={previous ? "prev" : "next"}
    >
      {previous ? (
        <>
          <i className={icon} /> {title}
        </>
      ) : (
        <>
          {title} <i className={icon} />
        </>
      )}
    </Link>
  )
}

Item.propTypes = {
  group: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  previous: PropTypes.bool.isRequired,
}

Item.defaultProps = {
  previous: false,
}
