import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Ellipsis from "./pagination/ellipsis"
import Item from "./pagination/item"

function getItems({ pages, current }) {
  const items = []

  for (let i = 0; i < pages; i++) {
    const page = i + 1

    if (
      page !== 1 &&
      page !== pages &&
      page < current + 2 &&
      page > current - 2
    ) {
      items.push(page)
    }
  }

  return items
}

export default function Pagination({ context, className }) {
  if (context.pages > 1) {
    const items = getItems(context)

    return (
      <nav
        className={classNames("pagination", className)}
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          <Item
            group={context.group}
            slug={context.slug}
            current={context.current}
            page={1}
          />
          {context.current > 3 && <Ellipsis />}
          {items.length > 0 &&
            items.map((page) => (
              <Item
                group={context.group}
                slug={context.slug}
                current={context.current}
                page={page}
                key={`pagination-item-${page}`}
              />
            ))}
          {context.current < context.pages - 2 && <Ellipsis />}
          {context.pages > 2 && (
            <Item
              group={context.group}
              slug={context.slug}
              current={context.current}
              page={context.pages}
            />
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
