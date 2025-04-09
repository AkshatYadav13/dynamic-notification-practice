import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";

import "./Notification.css";

const iconStyle = { marginRight: "10px" };

const icons = {
  success: <AiOutlineCheckCircle style={iconStyle} />,
  info: <AiOutlineInfoCircle style={iconStyle} />,
  warning: <AiOutlineWarning style={iconStyle} />,
  error: <AiOutlineCloseCircle style={iconStyle} />,
};

const Notification = ({
  type = "info",
  message,
  onClose,
  animation,
  leaving,
}) => {
  return (
    <div className={`notification ${type} ${leaving ? animation : ""}`}>
        <div>
            {icons[type.toLowerCase()]}
            {message}
        </div>
      <AiOutlineClose color="white" onClick={onClose} className="close-btn" />
    </div>
  );
};

export default Notification;
