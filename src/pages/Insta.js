import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export default function Insta (props){
  return (
      <InstagramEmbed
        className="insta-card"
        url={props.url}
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
      />
  )
}