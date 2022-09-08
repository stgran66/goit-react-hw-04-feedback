import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 600px;

  :not(:last-child) {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 32px;
  }

  > div {
    display: flex;
    gap: 30px;
  }

  p {
    font-size: 22px;
  }
`;
