import React from 'react'
import './About.css'

export default function About (){

  const tab = <span>&nbsp;&nbsp;</span>
  return (
    <div>
      <div className="kateObject">
        <p>{"const kate = {" }</p>
        <p>{tab}{"from: 'San Francisco'," }</p>
        <p>{tab}{"livesIn: 'Melbourne'," }</p>
        <p>{tab}{"codingSince: '18th June 2018'," }</p>
        <p>{tab}{"favouriteLanguage: 'Javascript'," }</p>
        <p>{tab}{"currentlyLearning: 'React'," }</p>
        <p>{tab}{"previousLives: [" }</p>
        <p>{tab}{tab}{"'bank teller','accountant',"}</p>
        <p>{tab}{tab}{"'receptionist', 'admissions'"}</p>        
        <p>{tab}{tab}{"'sales reportings, quality assurance'"}</p>
        <p>{tab}{"]" }</p>
        <p>{tab}{"values: [" }</p>
        <p>{tab}{tab}{"'creativity','learning', 'family',"}</p>
        <p>{tab}{tab}{"'spreading happiness'"}</p>
        <p>{tab}{"]" }</p>
        <p>{tab}{"hobbies: [" }</p>
        <p>{tab}{tab}{"'ukulele','drone photography',"}</p>
        <p>{tab}{tab}{"'walking/hiking', 'board games',"}</p>
        <p>{tab}{tab}{"'studying Japanese'"}</p>
        <p>{tab}{"]" }</p>
        <p>{tab}{"favouriteBook: 'Dune by Frank Herbert'," }</p>
        <p>{tab}{"MBTI:"} <a href="https://www.16personalities.com/isfp-personality" rel="noopener noreferrer" target="_blank">'ISFP'</a></p>
        <p>{tab}{"lovesCats: true," }</p>
        <p>{tab}{"volunteersWith:"} <a rel="noopener noreferrer" href="https://www.cheltenhamcatrescue.org.au/" target="_blank">'cheltenham cat rescue'</a></p>
        <p>{"}"}</p>
      </div>
    </div>
  )
}