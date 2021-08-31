import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

import Chunk from "./navbar/chunk"

export default function Navbar({
  location,
  className,
  startItems,
  endItems,
  children,
}) {
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
        <Chunk
          className="navbar-start"
          items={startItems}
          location={location}
        />
        <Chunk className="navbar-end" items={endItems} location={location} />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  location: PropTypes.object,
  className: PropTypes.string,
  startItems: PropTypes.array.isRequired,
  endItems: PropTypes.array.isRequired,
  children: PropTypes.any,
}

Navbar.defaultProps = {
  startItems: [],
  endItems: [],
}
