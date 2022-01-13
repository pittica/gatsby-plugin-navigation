import React from "react"
import PropTypes from "prop-types"

import Item from "./item"

export default function Chunk({ className, items, location }) {
  if (items.length > 0) {
    return (
      <div className={className}>
        {items.map((item, i) => {
          if (typeof item.$$typeof === "symbol") {
            return item
          } else {
            const { to, link, className, label, icon, onClick } = item

            return (
              <Item
                to={to}
                link={link}
                location={location}
                key={`navbar-item-${i}`}
                className={className}
                icon={icon}
                onClick={onClick}
              >
                {label}
              </Item>
            )
          }
        })}
      </div>
    )
  } else {
    return null
  }
}

Chunk.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  location: PropTypes.object,
}

Chunk.defaultProps = {
  className: "navbar-start",
  items: [],
}
