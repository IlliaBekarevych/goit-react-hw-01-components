import StatisticItem from './StatisticsItem';
import i from './index.module.css';

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

export default Statistics;
