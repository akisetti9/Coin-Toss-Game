// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, rand: 0}

  tossTheCoin = () => {
    const newRand = Math.round(Math.random())
    if (newRand === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        rand: newRand,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        rand: newRand,
      }))
    }
  }

  render() {
    const {heads, tails, rand} = this.state
    const tossImgUrl =
      rand === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="box">
          <h1>Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <div className="coin-box">
            <img src={tossImgUrl} alt="toss result" className="coin-image" />
          </div>
          <button type="button" onClick={this.tossTheCoin} className="btn">
            Toss Coin
          </button>
          <div className="stats">
            <p>Total: {heads + tails}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
