import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

import Item from "./navbar/item"

export default function Navbar({ location, className, items, children }) {
  const [active, setActive] = useState(false)

  return (
    <nav
      className={classNames("navbar", className)}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          {children}
        </Link>
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault()
            setActive(!active)

            return false
          }}
          role="button"
          className={classNames("navbar-burger", "burger", {
            "is-active": active,
          })}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </Link>
      </div>
      <div
        className={classNames("navbar-menu", {
          "is-active": active,
        })}
      >
        {items.length > 0 && (
          <div className="navbar-start">
            {items.map(({ to, href, label }, i) => (
              <Item
                to={to}
                href={href}
                location={location}
                key={`navbar-start-item-${i}`}
              >
                {label}
              </Item>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  location: PropTypes.object,
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  children: PropTypes.any,
}

Navbar.defaultProps = {
  items: [],
}
