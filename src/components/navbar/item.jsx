import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

import Label from "./label"

export default function Item({
  children,
  to,
  link,
  location,
  className,
  icon,
  onClick,
}) {
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
        onClick={onClick}
      >
        <Label icon={icon}>{children}</Label>
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
        onClick={onClick}
      >
        <Label icon={icon}>{children}</Label>
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
  icon: PropTypes.string,
  onClick: PropTypes.func,
}
