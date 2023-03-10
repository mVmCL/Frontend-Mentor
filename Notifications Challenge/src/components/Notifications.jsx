
// import React,{useState,useEffect} from 'react'
// import data from './data.json'
// const Notifications = () => {


//   const [notifications, setNotifications] = React.useState(data.notifications);
//   const [readCount, setReadCount] = useState(notifications.filter(notification => notification.read).length);
// console.log(readCount)

//   useEffect(() => {

//     const readCount = notifications.filter(notification => notification.read).length;
//     setReadCount(readCount);
//   }, [notifications]);
//   const handleHover = (notification) => {
//     if (notification.read) {
//       alert(`Notification read ${notification.timestamp}.`);
//     } else {
//       alert(
//         `Unread notification from ${JSON.stringify(
//           notification.author.name
//         )}\n\n \b\b\b\bMessage\b\b\b\b\n\n${JSON.stringify(
//           notification.notification
//         )}`
//       );setReadCount(readCount -1)
//       notification.read = true;
//       setNotifications([...notifications]);
// console.log(readCount)



// setReadCount(notifications.filter(notification => notification.read).length);
// console.log(readCount)
//     }
//   };
//   const handleMarkAllRead = (notification) => {
//     notifications.map((notification) => (notification.read = true));

//     setNotifications([...notifications]);
//     setReadCount(0);
//   };

//   const handleMarkAllUnRead = (notification) => {
//     notifications.map((notification) => (notification.read = false));

//     setNotifications([...notifications]);
//     setReadCount(notifications.length);
//   };

//   return (
//     <div>
//       <NotificationHeader
//         readCount={readCount}
//         handleMarkAllRead={handleMarkAllRead}
//         handleMarkAllUnRead={handleMarkAllUnRead}
//       />
//       <NotificationList
//         notifications={notifications}
//         onHover={handleHover}
//       />
//     </div>
//   );
// };

// const NotificationHeader = ({
//   readCount,
//   handleMarkAllRead,
//   handleMarkAllUnRead,
//   fromWho
// }) => {
//   return (
//     <div className="header-wrapper">
//       <div className="element1">
//         <h2>
//           Notifications{" "}
//           <span className="notification-icon">({readCount})</span>
//           {fromWho}
//         </h2>
//       </div>
//       <div className="header-select-all">
//         {readCount === 0 ? (
//           <button className="element2 no-button" onClick={handleMarkAllRead}>
//             Mark All UnRead
//           </button>
//         ) : (
//           <button className="element2 no-button" onClick={handleMarkAllUnRead}>
//             Mark All Read
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const NotificationList = ({ notifications, onHover, onFocus, notification }) => {
//   return (
//     <div
//       onMouseEnter={() => {
//         if (notification.read) {
//           onHover(notification);
//         }
//       }}
//       onFocus={() => {
//         if (notification.read) {
//           onFocus(notification);
//         }
//       }}
//       className="notifications col-one"
//     >
//       {notifications.map((notification) => (
//         <Notification
//           key={notification.id}
//           notification={notification}
//           onHover={onHover}
//           read={notification.read}
//         />
//       ))}
//     </div>
//   );
// };

// const Notification = ({ notification, onHover, onFocus }) => {
//   return (
//     <div onMouseEnter={() => onHover(notification)} onFocus={() => onFocus(notification)}>
//       <div className="col-one">
//         {notification.author.img && (
//           <img src={notification.author.img} alt="notification" />
//         )}
//       </div>

//       <div className="col-two">
//         <p className="note-item">{notification.author.name}</p>
//         <h2 className="note-item name">{notification.notification}</h2>
//         {notification.link && (
//           <a className="note-item bold" href={notification.link}>
//             {notification.link}
//           </a>
//         )}
//         <p className="note-item">
//           {notification.timestamp || notification.readAtTimestamp}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Notifications;


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
  const handleHover = (notification) => {
    if (notification.read) {
      alert(`Notification read ${notification.timestamp}.`);
    } else {
      alert(
        `Unread notification from ${JSON.stringify(
          notification.author.name
        )}\n\n \b\b\b\bMessage\b\b\b\b\n\n${JSON.stringify(
          notification.notification
        )}`
      );setReadCount(readCount -1)
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
    setReadCount(0);
  };

  const handleMarkAllUnRead = (notification) => {
    notifications.map((notification) => (notification.read = false));

    setNotifications([...notifications]);
    setReadCount(notifications.length);
  };

  return (
    <div>
      <NotificationHeader
        readCount={readCount}
        handleMarkAllRead={handleMarkAllRead}
        handleMarkAllUnRead={handleMarkAllUnRead}
      />
      <NotificationList
        notifications={notifications}
        onHover={handleHover}
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
      <div className="element1">
        <h2>
          Notifications{" "}
          <span className="notification-icon">({readCount})</span>
          {fromWho}
        </h2>
      </div>
      <div className="header-select-all">
        {readCount === 0 ? (
          <button className="element2 no-button" onClick={handleMarkAllRead}>
            Mark All UnRead
          </button>
        ) : (
          <button className="element2 no-button" onClick={handleMarkAllUnRead}>
            Mark All Read
          </button>
        )}
      </div>
    </div>
  );
};

const NotificationList = ({ notifications, onHover, onFocus, notification }) => {
  return (
    <div
      onMouseEnter={() => {
        if (notification.read) {
          onHover(notification);
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
          onHover={onHover}
          read={notification.read}
        />
      ))}
    </div>
 
  );
};

const Notification = ({ notification, onHover, onFocus }) => {
  return (
    <div onMouseEnter={() => onHover(notification)} onFocus={() => onFocus(notification)}>
      <div className="col-one">
        {notification.author.img && (
          <img src={notification.author.img} alt="notification" />
        )}
      </div>

      <div className="col-two">
        <p className="note-item">{notification.author.name}</p>
        <h2 className="note-item name">{notification.notification}</h2>
        {notification.link && (
          <a className="note-item bold" href={notification.link}>
            {notification.link}
          </a>
        )}
        <p className="note-item">aca
          {notification.timestamp || notification.readAtTimestamp}
        </p>
      </div>
      {notification.read ? (
        <div className="readStatus">
          <span>Read</span>
        </div>
      ) : (
        <div className="unReadStatus">
          <span>Unread</span>
        </div>
      )}
    </div>
  );
};

export default Notifications;