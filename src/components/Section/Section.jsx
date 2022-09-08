import { StyledSection } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </StyledSection>
  );
};
