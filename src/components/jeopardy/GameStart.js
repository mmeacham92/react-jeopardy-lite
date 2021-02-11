import React from "react";

class GameStart extends React.Component {
  render() {
    return (
      <div className="game__start">
        <h1 className>Welcome To</h1>
        <h1 className='jeopardy__banner'>Jeopardy!</h1>
        <button onClick={this.props.updateIsPlaying} type='button' className='play__now-button'>
          Play
        </button>
      </div>
    );
  }
}

export default GameStart;
