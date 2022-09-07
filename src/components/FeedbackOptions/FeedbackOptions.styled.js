import styled from 'styled-components';
const btnColors = {
  neutral: 'orange',
  bad: 'red',
  good: 'green',
};

export const Button = styled.button`
padding:10px 30px;
background-color: ${props => btnColors[props.name]};
border:none;
border-radius: 6px;
font-size: 18px;
font-weight: bold;
color: #020202;
cursor:pointer;
}`;
