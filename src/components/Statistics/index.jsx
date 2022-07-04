import StatisticItem from './StatisticsItem';
import i from './index.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={i.statistics}>
    {title && <h2 className={i.title}>{title}</h2>}

    <ul className={i.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Statistics;
