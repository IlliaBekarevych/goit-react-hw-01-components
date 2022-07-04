import i from './index.module.css';
import propTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
  <div className={i.profile}>
    <div className={i.description}>
      <img src={avatar} alt="User avatar" className={i.avatar} />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
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

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.arrayOf({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};

export default Profile;
