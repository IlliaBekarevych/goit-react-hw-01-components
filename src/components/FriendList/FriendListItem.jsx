import i from '../FriendList/index.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={i.item}>
    <span className={i.status + ' ' + (isOnline ? i.statusGreen : i.statusRed)}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendListItem;
