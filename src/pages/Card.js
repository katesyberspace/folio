import React from 'react'
import './Card.css'

export default function Card (props){
  return <div className='card'>
    <div className="card-img" style={{background: props.project.background, backgroundSize: 'contain'}}>
      <span className="card-title">{props.project.name}</span>
    </div>

    <div className="card-description">
      <p>{props.project.description}</p>
    </div>

    <div className="card-links">
      <a target="_blank" href={props.project.github}>github</a>
      <a target="_blank" href={props.project.demo}>demo</a>
    </div>

  </div>
}