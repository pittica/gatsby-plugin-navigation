import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

import Chunk from "./navbar/chunk"
import Logo from "./navbar/logo"

export default function Navbar({
  location,
  className,
  startItems,
  endItems,
  children,
  link,
  logoImage,
  logoWidth,
  logoHeight,
  title,
}) {
  const [active, setActive] = useState(false)

  return (
    <nav
      className={classNames("navbar", className)}
      role="navigation"
      aria-label="main navigation"
      itemScope={true}
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="navbar-brand">
        {logoImage && (
          <Logo
            image={logoImage}
            title={title}
            width={logoWidth}
            height={logoHeight}
            link={link}
          />
        )}
        {children}
        {(startItems.length > 0 || endItems.length > 0) && (
          <Link
            to={link}
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
        )}
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
  link: PropTypes.string.isRequired,
  logoImage: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  title: PropTypes.string,
}

Navbar.defaultProps = {
  startItems: [],
  endItems: [],
  link: "/",
}
