import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import './Drone.css'

export default function Drone() {
  const instagrams = [
    'https://www.instagram.com/p/BnE9oeQF8mx/',
    'https://www.instagram.com/p/Bm96XHWlSiL/',
    'https://www.instagram.com/p/Bmr5XO2lMdj/',
    'https://www.instagram.com/p/Bmb57U2Fpfi/',
    'https://www.instagram.com/p/BmFrVS0n6Sv/',
    'https://www.instagram.com/p/Bl0K_cenIUP/'
  ]

  return (

    <div className="drone-wrapper">
      <div className="drone-intro"><p>This is a drone photography project I started called "Code Anywhere."  One of the many reasons I love web development is the ability to bring my laptop anywhere and work, and I thought it would be a good chance to use my drone to document my outings, and hopefully inspire others to get out and code.</p></div>
      <div className="insta-wrapper">
        <InstagramEmbed
          style={{margin: '0 auto'}}
          className="insta-card"
          url={instagrams[0]}
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          // protocol=''
          // injectScript
          // onLoading={() => { }}
          // onSuccess={() => { }}
          // onAfterRender={() => { }}
          // onFailure={() => { }}
        />
      </div>
    </div>


  )


}