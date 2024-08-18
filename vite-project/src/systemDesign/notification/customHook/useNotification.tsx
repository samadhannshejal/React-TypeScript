import { useCallback, useState } from "react";
import Notification from "../components/Notification";

export type NotificationProps = {
  id: string;
  message: string;
  type?: "info" | "warning" | "success" | "error";
  onClose?: (id: string) => void;
};

const useNotification = (position: string) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const triggeredNotification = useCallback(
    (notificationProps: Omit<NotificationProps, "id">) => {
      const id =crypto.randomUUID();
      const newNotification = { ...notificationProps, id };
      
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);

      setTimeout(() => {
        removeNotification(id);
      }, 6000);
    },
    []
  );

  const NotificationComponent = notifications.length > 0 ? (
    <div className={position}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          id={notification.id}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  ) : null;

  return { NotificationComponent, triggeredNotification };
};

export default useNotification;
