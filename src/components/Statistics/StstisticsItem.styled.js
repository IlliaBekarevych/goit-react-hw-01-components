import styled from 'styled-components';
import { getRandomHexColor } from './StatisticsItem';

export const StatisticSection = styled.section`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: 2px solid silver;
  border-color: black;
  border-radius: 5px;
`;

export const StatisticUl = styled.ul`
  display: flex;
`;

export const StatisticH2 = styled.h2`
  background-color: #fff;
  padding: 10px 0px 10px 0px;
  display: flex;
  justify-content: center;
`;

export const StatisticBox = styled.li`
  width: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${getRandomHexColor};
`;

export const StatisticLabel = styled.span`
  padding: 10px 0px 5px 0px;
  display: flex;
  justify-content: center;
`;

export const StatisticData = styled.span`
  padding: 5px 0px 10px 0px;
  display: flex;
  justify-content: center;
`;
