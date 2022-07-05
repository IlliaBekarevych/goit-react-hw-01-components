import StatisticItem from './StatisticsItem';
import {
  StatisticSection,
  StatisticUl,
  StatisticH2,
} from './StstisticsItem.styled';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <StatisticSection>
    {title && <StatisticH2>{title}</StatisticH2>}

    <StatisticUl>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </StatisticUl>
  </StatisticSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
