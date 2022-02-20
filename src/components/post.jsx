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
  innerNext,
  innerPrevious,
  styleNext,
  stylePrevious,
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
            style={stylePrevious}
          >
            {innerPrevious}
          </Item>
        )}
        {next && (
          <Item
            group={group}
            slug={next.slug}
            icon={iconNext}
            previous={false}
            title={next.title}
            style={styleNext}
          >
            {innerNext}
          </Item>
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
  innerNext: PropTypes.any,
  innerPrevious: PropTypes.any,
  styleNext: PropTypes.object,
  stylePrevious: PropTypes.object,
}
