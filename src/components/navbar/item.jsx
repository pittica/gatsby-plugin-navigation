import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

export default function Item({ children, to, link, location, className }) {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames(
          "navbar-item",
          {
            "is-active": location.pathname === to,
          },
          className
        )}
      >
        <span>{children}</span>
      </Link>
    )
  } else {
    return (
      <a
        href={link}
        className={classNames(
          "navbar-item",
          {
            "is-active": location.pathname === to,
          },
          className
        )}
      >
        <span>{children}</span>
      </a>
    )
  }
}

Item.propTypes = {
  to: PropTypes.string,
  link: PropTypes.string,
  location: PropTypes.object,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}
