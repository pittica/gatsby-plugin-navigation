import React from "react"

import Ellipsis from "./ellipsis"
import PaginationItem from "./pagination-item"

export default function Pagination({ context }) {
  if (context.pages > 1) {
    const items = []

    for (let i = 0; i < context.pages; i++) {
      const page = i + 1

      if (
        page !== 1 &&
        page !== context.pages &&
        page < context.current + 2 &&
        page > context.current - 2
      ) {
        items.push({
          group: context.group,
          slug: context.slug,
          current: context.current,
          page,
        })
      }
    }

    return (
      <nav className="pagination" role="navigation" ariaLabel="pagination">
        <ul className="pagination-list">
          <PaginationItem
            group={context.group}
            slug={context.slug}
            current={context.current}
            page={1}
          />
          {context.current > 3 && <Ellipsis />}
          {items.length > 0 &&
            items.map(({ group, slug, current, page }) => (
              <PaginationItem
                group={group}
                slug={slug}
                current={current}
                page={page}
                key={`li-${page}`}
              />
            ))}
          {context.current < context.pages - 2 && <Ellipsis />}
          {context.pages > 2 && (
            <PaginationItem
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
