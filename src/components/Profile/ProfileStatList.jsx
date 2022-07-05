import i from './index.module.css';
import PropTypes from 'prop-types';

const ProfileStatList = ({ followers, views, likes }) => (
  <ul className={i.stats}>
    <li className={i.item}>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={i.item}>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className={i.item}>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
);

ProfileStatList.propTypes = {
  stats: PropTypes.arrayOf({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default ProfileStatList;
