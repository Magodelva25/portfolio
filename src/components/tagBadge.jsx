import React from 'react'

const TagBadge = (props) => {
  return (
    <div className='tag-card'>
        <span>{props.content}</span>
    </div>
  )
}

export default TagBadge