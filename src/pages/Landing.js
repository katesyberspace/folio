import React from 'react'
import './Landing.css'

const myDescriptions = [
  'full-stack web developer',
  'foster-carer for rescue cats',
  'ukulele strummer',
  'Japanese language enthusiast',
  'drone photography hobbyist',
]

class Landing extends React.Component {

  constructor (){
    super()
    this.state = {
      descriptionIdx : 0
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    console.log(random)
    this.setState({
      descriptionIdx: random
    })
  }


  componentDidMount(){
    this.interval = setInterval(()=> this.getRandomInt(0,5), 2000)
  }


  render(){

    return (
      <div className="landing-grid">
        <div className="welcome">
          <h1>Hi, I'm Kate</h1>
          <h1>I'm a <span>{myDescriptions[this.state.descriptionIdx]}</span>.</h1>
        </div>
        <div className="skills">
          <section className="html"><span className="html-span">html</span></section>
          <section className="css">css</section>
          <section className="ruby">ruby</section>
          <section className="js">js</section>
          <section className="node">node</section>
          <section className="react">react</section>
        </div>

      </div>
    )
  }
}


export default Landing