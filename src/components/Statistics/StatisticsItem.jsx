import i from './index.module.css';
import propTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const StatisticItem = ({ label, percentage }) => (
  <li className={i.item} style={{ backgroundColor: getRandomHexColor() }}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default StatisticItem;
