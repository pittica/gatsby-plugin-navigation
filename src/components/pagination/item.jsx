import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

export default function Item({ group, slug, page, current, rel, children }) {
  let link = ""

  if (group) {
    link += "/" + group
  }

  if (slug) {
    link += "/" + slug
  }

  if (page > 1) {
    link += "/" + page
  }

  return (
    <li>
      <Link
        to={link}
        className={classNames("pagination-link", {
          "is-current": current === page,
        })}
        aria-label={children || page}
        aria-current={current === page ? "page" : null}
        rel={rel}
      >
        {children || page}
      </Link>
    </li>
  )
}

Item.propTypes = {
  group: PropTypes.string,
  slug: PropTypes.string,
  current: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rel: PropTypes.string,
  children: PropTypes.string,
}

Item.defaultProps = {
  current: 0,
  page: 0,
}
