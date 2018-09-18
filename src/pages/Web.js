import React from 'react'
import Card from './Card'
import './Web.css'




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
    description: 'A full stack, responsive, database-backed application built with Ruby.  The app offers an easy way for friends ot split expenses for outings such as weekend trips away.  Users can create bills or join existing bills using a unique bill join code.',
    github: 'https://github.com/katesyberspace/billmates',
    demo: 'https://billmates.herokuapp.com'
  }

  const letsQuiz = {
    name: "Let's Quiz!",
    background: 'url(https://i.imgur.com/nVCy3ZY.png)',
    description: 'This app was my first experience working within a group of developers.  Aside from learning all about git branches and version controlling, our group utilised server sent events to simulate a real-time two player trivia game.',
    github: 'https://github.com/katesyberspace/the_quiz',
    demo: 'http://letsquiz.herokuapp.com/'
  }

  const cruisin = {
    name: "Cruisin_",
    background: 'url(https://i.imgur.com/yjLybnV.png)',
    description: "The purpose of Cruisin_ is to make it easy for users to get practical travel information about any country.  As this was my first React app, I tried to keep the concept simple in order to gain a good understanding of React itself and deliver a clean user interface.",
    github: 'https://github.com/katesyberspace/cruisin_',
    demo: 'https://katesyberspace.github.io/cruisin_/'
  }



  


  return <div className="web-wrapper">
    <Card project={ticTacToe} />
    <Card project={billmates} />
    <Card project={letsQuiz} />
    <Card project={cruisin} />

  </div>


}