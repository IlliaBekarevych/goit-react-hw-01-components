import i from './index.module.css';
import PropTypes from 'prop-types';
import ProfileDescription from './ProfileDescription';
import ProfileStatList from './ProfileStatList';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={i.profile}>
    <ProfileDescription
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <ProfileStatList followers={followers} views={views} likes={likes} />
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
