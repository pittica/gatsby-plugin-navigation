import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Ellipsis from "./pagination/ellipsis"
import Item from "./pagination/item"

export default function Pagination({
  context: { group, slug, pages, current },
  className,
}) {
  if (pages > 1) {
    const items = []
    const start = Math.max(1, current - 2)
    const stop = Math.min(current + 2, pages - 1)

    if (pages > 2) {
      for (let i = start; i < stop; i++) {
        items.push(
          <Item
            group={group}
            slug={slug}
            current={current}
            page={i + 1}
            key={`pagination-item-${i}`}
          />
        )
      }
    }

    return (
      <nav
        className={classNames("pagination", className)}
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          <Item group={group} slug={slug} current={current} page={1} />
          {start > 1 && <Ellipsis />}
          {items}
          {stop < pages - 1 && <Ellipsis />}
          {pages > 1 && (
            <Item group={group} slug={slug} current={current} page={pages} />
          )}
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

Pagination.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
}
