import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

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

  countTotalReviews() {
    return Object.values(this.state).reduce((a, b) => a + b);
  }

  countPositiveReviewsPercentage() {
    return parseInt((this.state.good / this.countTotalReviews()) * 100);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions
            reviewOptions={Object.keys(this.state)}
            addReview={this.addReview}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalReviews() > 0 ? (
            <Statistics
              goodReviews={this.state.good}
              neutralReviews={this.state.neutral}
              badReviews={this.state.bad}
              totalReviews={this.countTotalReviews()}
              positiveReviewsPercentage={this.countPositiveReviewsPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
