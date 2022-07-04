import i from '../FriendList/index.module.css';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={i.item}>
    <span className={i.status + ' ' + (isOnline ? i.statusGreen : i.statusRed)}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
