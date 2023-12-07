import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin: 15px;
`;

export const Grid = styled.ul`
  display: flex;
  grid-gap: 5px;
  margin-block: 0;
  margin-top: 15px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border: 4px solid #fff;
  border-radius: 4px;
  transition: transform 0.5s cubicBezier;
  overflow: hidden;
  cursor: zoom-in;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px primary;
  }
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin: 20px;
  text-decoration: none;
  text-transform: uppercase;
`;
export const Heading = styled.h4`
  font-size: 24px;
  font-weight: 500;

  text-align: left;
  margin-bottom: 0;
`;
