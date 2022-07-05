import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticLabel,
  StatisticData,
} from './StstisticsItem.styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatisticItem = ({ label, percentage }) => (
  <StatisticBox>
    <StatisticLabel>{label}</StatisticLabel>
    <StatisticData>{percentage}%</StatisticData>
  </StatisticBox>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
