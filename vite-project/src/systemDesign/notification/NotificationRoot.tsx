import useNotification from "./customHook/useNotification";

const NotificationRoot = () => {
  const { NotificationComponent, triggeredNotification } =
    useNotification("top-right");
  return (
    <div>
      {NotificationComponent}{" "}
      <button
        onClick={() =>
          triggeredNotification({
            type: "success",
            message: "well done !",
          })
        }
      >
        Success
      </button>
      <button
        onClick={() =>
          triggeredNotification({
            type: "error",
            message: "Something went wrong ?",
          })
        }
      >
        Error
      </button>
      <button
        onClick={() =>
          triggeredNotification({
            type: "warning",
            message: "Don't do this ",
          })
        }
      >
        Warning
      </button>
      <button
        onClick={() =>
          triggeredNotification({
            type: "info",
            message: " You are grate man 😊",
          })
        }
      >
        Info
      </button>
    </div>
  );
};

export default NotificationRoot;
