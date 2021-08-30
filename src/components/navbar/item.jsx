import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

export default function Item({ children, to, link, location }) {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames("navbar-item", {
          "is-active": location.pathname === to,
        })}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a
        href={link}
        className={classNames("navbar-item", {
          "is-active": location.pathname === to,
        })}
      >
        {children}
      </a>
    )
  }
}

Item.propTypes = {
  to: PropTypes.string,
  link: PropTypes.string,
  location: PropTypes.object,
  children: PropTypes.any.isRequired,
}
