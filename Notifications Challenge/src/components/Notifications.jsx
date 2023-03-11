


import React,{useState,useEffect} from 'react'
import data from './data.json'

const Notifications = () => {


  const [notifications, setNotifications] = React.useState(data.notifications);
  const [readCount, setReadCount] = useState(notifications.filter(notification => notification.read).length);
console.log(readCount)

  useEffect(() => {

    const readCount = notifications.filter(notification => notification.read).length;
    setReadCount(readCount);
  }, [notifications]);
  const handleClick = (notification) => {
    if (notification.read) {
      console.info(`Notification read ${notification.timestamp}.`);
    } else {
      console.info(
        `Unread notification from ${JSON.stringify(
          notification.author.name
        )}\n\n \b\b\b\bMessage\b\b\b\b\n\n${JSON.stringify(
          notification.notification
        )}`
      );setReadCount(readCount +1)
      notification.read = true;
      setNotifications([...notifications]);
console.log(readCount)



setReadCount(notifications.filter(notification => notification.read).length);
console.log(readCount)
    }
  };
  const handleMarkAllRead = (notification) => {
    notifications.map((notification) => (notification.read = true));
    setNotifications([...notifications]);
    setReadCount(notifications.length);
  };

  const handleMarkAllUnRead = (notification) => {
    notifications.map((notification) => (notification.read = false));

    setNotifications([...notifications]);
    setReadCount(0);
  };

  return (
    <div className='notification-header'>
      <NotificationHeader
        readCount={readCount}
        handleMarkAllRead={handleMarkAllRead}
        handleMarkAllUnRead={handleMarkAllUnRead}
        className="notification-header"
      />
      <NotificationList
        notifications={notifications}
        onClick={handleClick}
        className="notification-container"
      />
    </div>
  );
};

const NotificationHeader = ({
  readCount,
  handleMarkAllRead,
  handleMarkAllUnRead,
  fromWho
}) => {
  return (
    <div className="header-wrapper">
      <header className="">
        <h1>
          Notifications{" "}
    <div className='notification-icon'> {readCount}</div>
        </h1>

      <div className="header-select-all">
        {readCount === 0 ? (
          <button className="no-button" onClick={handleMarkAllRead}>
            Mark All UnRead
          </button>
        ) : (
          <button className="no-button" onClick={handleMarkAllUnRead}>
            Mark All Read
          </button>
        )}
      </div>
       </header>   </div>
  );
};

const NotificationList = ({ notifications, onClick, onFocus, notification }) => {
  return (
    <div
      onClick={() => {
        if (notification.read) {
          onClick(notification);
        }
      }}
      onFocus={() => {
        if (notification.read) {
          onFocus(notification);
        }
      }}
      className="notifications col-one"
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onClick={onClick}
          read={notification.read}
        />
      ))}
    </div>
 
  );
};

const Notification = ({ notification, onClick, onFocus }) => {
  return (
    <div onClick={() => onClick(notification)} onFocus={() => onFocus(notification)} 
    className={ notification.read ? 'notification-container' :
      'unread-notification-container' }>
      {/* <div className="col-one"> */}
        {notification.author.img && (
          <img src={notification.author.img} alt="notification" />
        )}
   

      <div className="col-two"><p>
        <span className="note-item name">{notification.author.name}</span>
        <span className="note-item notification">{notification.notification}</span>
        {notification.link && (
          <a className="note-item link bold" href={notification.link}>
            {notification.link}
          </a>
        )}</p>

   
        <p className="note-item">
          {notification.timestamp || notification.readAtTimestamp}
        </p>     {notification.author.message ? <span className='message note-item'> {notification.author.message}</span> : ''}
      </div>
      {/* </div> */}
      {notification.read ? (
        <div className="readStatus">
          <span></span>
        </div>
      ) : (
        <div className="unReadStatus">
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Notifications;