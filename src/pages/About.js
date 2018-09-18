import React from 'react'
import './About.css'

export default function About (){

  const tab = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div className="kateObject">
        <p>
          <span className="blue">const </span>
          <span className="green">KATE </span>
          <span className="red">= </span>
          {" {" }
        </p>
        <p>{tab}from: 
          <span className="red">'San Francisco'</span>,</p>
        <p>{tab}livesIn: <span className="red">'Melbourne'</span>,</p>
        <p>{tab}codingSince: <span className="red">'18th June 2018'</span>,</p>
        <p>{tab}favouriteLanguage: <span className="red">'Javascript'</span>,</p>
        <p>{tab}currentlyLearning: <span className="red">'React'</span>,</p>
        <p>{tab}previousLives: [</p>
        <p>{tab}{tab}<span className="red">'bank teller','accountant',</span></p>
        <p>{tab}{tab}<span className="red">'receptionist', 'admissions',</span></p>        
        <p>{tab}{tab}<span className="red">'sales reporting, quality assurance'</span></p>
        <p>{tab}]</p>
        <p>{tab}values: [</p>
        <p>{tab}{tab}<span className="red">'creativity','learning', 'family',</span></p>
        <p>{tab}{tab}<span className="red">'spreading happiness'</span></p>
        <p>{tab}]</p>
        <p>{tab}hobbies: [</p>
        <p>{tab}{tab}<span className="red">'ukulele','drone photography',</span></p>
        <p>{tab}{tab}<span className="red">'walking/hiking', 'board games',</span></p>
        <p>{tab}{tab}<span className="red">'studying Japanese'</span></p>
        <p>{tab}]</p>
        <p>{tab}favouriteBook: <span className="red">'Dune by Frank Herbert'</span>,</p>
        <p>{tab}MBTI: <a href="https://www.16personalities.com/isfp-personality" rel="noopener noreferrer" target="_blank">'ISFP'</a>,</p>
        <p>{tab}lovesCats: <span className="blue">true</span>,</p>
        <p>{tab}volunteersWith: <a rel="noopener noreferrer" href="https://www.cheltenhamcatrescue.org.au/" target="_blank">'cheltenham cat rescue'</a></p>
        <p>{"}"}</p>
      </div>
    </div>
  )
}