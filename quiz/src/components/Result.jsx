import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='end'>
        <h1 className='result'>Result</h1>
        <div className='game2'>
          <h4>You need more practice!</h4>
          <p className="score">Your score is 20%</p>
          <div>
            <div className="Details">
              <b>Total number of questions</b>
              <b>15</b>
            </div>
            <div className="Details">
              <b>Number of attempted questions</b>
              <b>9</b>
            </div>
            <div className="Details">
              <b>Number of correct answers</b>
              <b>3</b>
            </div>
            <div className="Details">
              <b>Number of wrong answers</b>
              <b>6</b>
            </div>
          </div>
        </div>

        <div className='last'>
          <button className='again'>Play Again</button>
          <button className='restart'>Back to home</button>
        </div>
      </div>
    )
  }
}