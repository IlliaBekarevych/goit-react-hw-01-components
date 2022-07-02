import i from './index.module.css';

import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => (
  <ul className={i.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendList;
