import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/';
import { Section } from './Section/';
import { Statistics } from './Statistics/';
import { Notification } from './Notification/';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const reviewOptions = ['good', 'neutral', 'bad'];

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
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(parseInt((good / total) * 100));
  }, [good, total]);

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
        {total > 0 ? (
          <Statistics
            goodReviews={good}
            neutralReviews={neutral}
            badReviews={bad}
            totalReviews={total}
            positiveReviewsPercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </div>
  );
};
