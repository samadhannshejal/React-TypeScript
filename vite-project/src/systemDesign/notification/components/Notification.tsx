import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./style.css";
import { NotificationProps } from "../customHook/useNotification";
const icons = {
  info: <IoIosInformationCircleOutline />,
  warning: <IoWarning />,
  success: <AiOutlineCheckCircle />,
  error: <MdError />,
};
const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  onClose = () => {},
  id,
}) => {
  return (
    <div className={`notification ${type}`}>
      <div className="notification-child">
        {icons[type]}
        {message}
      </div>
      <div onClick={()=>onClose(id)} style={{ cursor: "pointer" }}>
        {<RxCross2 />}
      </div>
    </div>
  );
};

export default Notification;
