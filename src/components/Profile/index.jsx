import i from './index.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={i.profile}>
    <div className={i.description}>
      <img src={avatar} alt="User avatar" className={i.avatar} />
      <p className={i.name}>{username}</p>
      <p className={i.tag}>@{tag}</p>
      <p className={i.location}>{location}</p>
    </div>

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
  </div>
);

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
