import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import Item from "./post/item"

export default function Post({
  previous,
  next,
  group,
  className,
  iconNext,
  iconPrevious,
}) {
  if (previous || next) {
    return (
      <nav
        className={classNames("pagination", className)}
        role="navigation"
        aria-label="pagination"
      >
        {previous && (
          <Item
            group={group}
            slug={previous.slug}
            icon={iconPrevious}
            previous={true}
            title={previous.title}
          />
        )}
        {next && (
          <Item
            group={group}
            slug={next.slug}
            icon={iconNext}
            previous={false}
            title={next.title}
          />
        )}
      </nav>
    )
  } else {
    return null
  }
}

Post.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
  group: PropTypes.string,
  className: PropTypes.string,
  iconNext: PropTypes.string,
  iconPrevious: PropTypes.string,
}
