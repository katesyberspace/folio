import React from 'react'
import Card from './Card'




export default function Web() {
  const ticTacToe = {
    name: 'Tic-Tac-Toe',
    background: 'url(https://i.imgur.com/2P91WXM.png)',
    description: 'My first ever web application bringing together HTML, CSS and Javascript.  My favourite feature utilises DOM manipulation and allows the user to resize the board.',
    github: 'https://github.com/katesyberspace/tic-tac-toe',
    demo: 'https://katesyberspace.github.io/tic-tac-toe/'
  }

  const billmates = {
    name: 'billmates',
    background: 'url(https://i.imgur.com/RypgMyd.png)',
    description: 'My first ever web application bringing together HTML, CSS and Javascript.  My favourite feature utilises DOM manipulation and allows the user to resize the board.',
    github: 'https://github.com/katesyberspace/billmates',
    demo: 'https://billmates.herokuapp.com'
  }
  return <div className="web-wrapper">
    <Card project={ticTacToe} />
    <Card project={billmates} />

  </div>


}