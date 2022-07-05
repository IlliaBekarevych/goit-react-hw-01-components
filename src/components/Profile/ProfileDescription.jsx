import i from './index.module.css';
import PropTypes from 'prop-types';

const ProfileDescription = ({ username, tag, location, avatar }) => (
  <div className={i.description}>
    <img src={avatar} alt="User avatar" className={i.avatar} />
    <p className={i.name}>{username}</p>
    <p className={i.tag}>@{tag}</p>
    <p className={i.location}>{location}</p>
  </div>
);

ProfileDescription.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileDescription;
