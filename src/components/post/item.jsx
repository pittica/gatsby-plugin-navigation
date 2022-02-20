import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

export default function Item({
  group,
  slug,
  title,
  icon,
  previous,
  style,
  children,
}) {
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
      style={style}
    >
      {children}
      {previous ? (
        <span>
          <i className={icon} /> {title}
        </span>
      ) : (
        <span>
          {title} <i className={icon} />
        </span>
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
  style: PropTypes.object,
  children: PropTypes.any,
}

Item.defaultProps = {
  previous: false,
}
