import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classnames from "classnames"

export default function PaginationItem({
  group,
  slug,
  page,
  current,
  rel,
  children,
}) {
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
        className={classnames("pagination-link", {
          "is-current": current === page,
        })}
        ariaLabel={children || page}
        ariaCurrent={current === page ? "page" : null}
        rel={rel}
      >
        {children || page}
      </Link>
    </li>
  )
}

PaginationItem.propTypes = {
  group: PropTypes.string,
  slug: PropTypes.string,
  current: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rel: PropTypes.string,
  children: PropTypes.any,
}

PaginationItem.defaultProps = {
  current: 0,
  page: 0,
}
