import i from './index.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={i.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.PropTypes = {
  id: PropTypes.number.isRequired,
};

export default FriendList;
