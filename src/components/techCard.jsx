import React from 'react'

const techCard = (props) => {
  return (
    <div>
        <div className="tech-card">
            <span>{props.techs}</span>
        </div>
    </div>
  )
}

export default techCard
