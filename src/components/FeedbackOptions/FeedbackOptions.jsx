import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ reviewOptions, addReview }) => {
  return reviewOptions.map(option => (
    <Button key={option} type="button" name={option} onClick={addReview}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  reviewOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  addReview: PropTypes.func.isRequired,
};
