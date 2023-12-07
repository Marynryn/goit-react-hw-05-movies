import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;
export const GridItem = styled.li`
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 250px;
  max-height: 350px;
  margin-left: auto;
  margin-right: auto;
`;
export const Text = styled.p`
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  margin-block-start: 5px;
  text-align: left;
  margin-bottom: 0;
`;
