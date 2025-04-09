import { useState, useRef } from "react";
import Notification from "../components/Notification";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);
  const timeoutRefs = useRef(new Map());

  function removeNotification(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, leaving: true } : n))
    );

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));

      if (timeoutRefs.current.has(id)) {
        clearTimeout(timeoutRefs.current.get(id));
        timeoutRefs.current.delete(id);
      }
    }, 400);
  }

  const triggerNotification = (notification) => {
    const id = crypto.randomUUID();

    const animation = notification.animation || "fade";

    const newNotification = { ...notification, id, leaving: false, animation };
    setNotifications((prev) => [newNotification, ...prev]);

    const timmer = setTimeout(() => {
      removeNotification(id);
    }, notification.duration);

    timeoutRefs.current.set(id, timmer);
  };

  const NotificationComponent =
    notifications.length > 0 ? (
      <div className={` notification-container ${position} `}>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            leaving={notification.leaving}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
