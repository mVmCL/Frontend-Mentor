

import React from 'react';
import data from './data.json';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState(data.notifications);
  const [readCount, setReadCount] = React.useState(
    notifications.filter((notification) => notification.read === false).length
  );

  const handleHover = (notification) => {
    notification.read = true;
    setNotifications([...notifications]);
    setReadCount(readCount > 0 ? readCount - 1 : 0);
  };

  const handleFocus = (notification) => {
    notification.read = true;
    setNotifications([...notifications]);
    setReadCount(readCount > 0 ? readCount - 1 : 0);
  };

  const handleMarkAllRead = () => {
    notifications.map((notification) => (notification.read = true));
    setNotifications([...notifications]);
    setReadCount(0);
  };

  const handleMarkAllUnRead = () => {
    notifications.map((notification) => (notification.read = false));
    setNotifications([...notifications]);
    setReadCount(notifications.length);
  };


  return (
    <div>
      <NotificationHeader readCount={readCount} handleMarkAllRead={handleMarkAllRead} handleMarkAllUnRead={handleMarkAllUnRead}/>
      <NotificationList
        notifications={notifications}
        onHover={handleHover}
        onFocus={handleFocus}
      />
    </div>
  );
};

const NotificationHeader = ({ readCount, handleMarkAllRead, handleMarkAllUnRead }) => {
  return (
    <div className='header-wrapper'>
      <div className='element1'>
      <h2>Notifications <span className='notification-icon'>({readCount})</span></h2></div>
<div className='header-select-all'>
     {readCount === 0 ? <button className='element2 no-button' onClick={handleMarkAllUnRead}>Mark All UnRead</button> : <button className='element2 no-button' onClick={handleMarkAllRead}>Mark All Read</button> }
      </div>  </div>
  );
};

const NotificationList = ({ notifications, onHover, onFocus }) => {
  return (
    <div>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onHover={onHover}
          onFocus={onFocus}
          className="notification"
        />
      ))}
    </div>
  );
};

const Notification = ({ notification, onHover, onFocus }) => {

  const style = { backgroundColor:notification.read ?  '#FFFFFF' :'#F0F0F0'}
  return (

    <div style={style} onMouseEnter={() => onHover(notification)} onFocus={() => onFocus(notification)} className="notifications col-one">
    <div className='col-one'>
       {notification.author.img && <img src={notification.author.img}/>}
       </div>
   
    
    <div className='col-two'>
  <p className='note-item'>{notification.author.name}</p>
      <h2 className="note-item name">{notification.notification}</h2>
         {notification.link && <a className="note-item bold" href={notification.link}>{notification.link}</a>}
            <p className='note-item'>{notification.timestamp}</p>
    
     </div>

    </div>
  );
};

export default Notifications;

