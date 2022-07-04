import StatisticItem from './StatisticsItem';
import i from './index.module.css';
import propTypes from 'prop-types';

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

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(propTypes.shape({ id: propTypes.string.isRequired })),
};

export default Statistics;
