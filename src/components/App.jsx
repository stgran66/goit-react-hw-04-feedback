import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addReview = e => {
    const key = e.currentTarget.name;
    this.setState(prevState => ({ [key]: (prevState[key] += 1) }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          reviewOptions={Object.keys(this.state)}
          addReview={this.addReview}
        ></FeedbackOptions>
      </div>
    );
  }
}
