import React from 'react'

const TagBadge = (params) => {
  return (
    <div className='tag-card'>
        <span>{params.content}</span>
    </div>
  )
}

export default TagBadge