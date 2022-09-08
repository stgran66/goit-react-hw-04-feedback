export const Statistics = ({
  goodReviews,
  neutralReviews,
  badReviews,
  totalReviews,
  positiveReviewsPercentage,
}) => {
  return (
    <div>
      <p>Good: {goodReviews}</p>
      <p>Neutral: {neutralReviews}</p>
      <p>Bad: {badReviews}</p>
      <p>Total: {totalReviews}</p>
      <p>Positive feedback: {positiveReviewsPercentage}%</p>
    </div>
  );
};
