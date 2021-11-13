import React from "react"
import PropTypes from "prop-types"

export default function Item({ children, icon }) {
  if (icon) {
    if (children) {
      return (
        <div className="icon-text">
          <span className="icon">
            <i className={icon}></i>
          </span>
          <span>{children}</span>
        </div>
      )
    } else {
      return (
        <span className="icon">
          <i className={icon}></i>
        </span>
      )
    }
  } else {
    return <span>{children}</span>
  }
}

Item.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string,
}
