import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ reviewOptions, addReview }) => {
  return reviewOptions.map(option => (
    <Button key={option} type="button" name={option} onClick={addReview}>
      {option}
    </Button>
  ));
};
