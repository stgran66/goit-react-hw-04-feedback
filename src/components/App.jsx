import { useEffect, useState, useRef } from 'react';
import { FeedbackOptions } from './FeedbackOptions/';
import { Section } from './Section/';
import { Statistics } from './Statistics/';
import { Notification } from './Notification/';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviewOptions = ['good', 'neutral', 'bad'];

  const totalReviews = useRef(0);
  const positiveReviews = useRef(0);

  const addReview = e => {
    const key = e.currentTarget.name;

    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;

      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        console.log('There is no such option');
        return;
    }
  };

  useEffect(() => {
    totalReviews.current = good + neutral + bad;
  }, [good, neutral, bad]);

  useEffect(() => {
    positiveReviews.current = parseInt(
      Number(good / totalReviews.current) * 100
    );
  }, [good, neutral, bad]);

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
        <FeedbackOptions options={reviewOptions} onLeaveFeedback={addReview} />
      </Section>

      <Section title="Statistics">
        {good + neutral + bad > 0 ? (
          <Statistics
            goodReviews={good}
            neutralReviews={neutral}
            badReviews={bad}
            totalReviews={totalReviews.current}
            positiveReviewsPercentage={positiveReviews.current}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </div>
  );
};
