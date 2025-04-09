import { useState } from "react";
import "./styles.css";
import Notification from "./components/Notification.jsx";
import useNotification from "./hooks/useNotification.jsx";

export default function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");

  return (
    <div className="App">
      {NotificationComponent}

      <div>
        <button
          onClick={() => {
            triggerNotification({
              type: "success",
              message: "File Sent Successfully",
              duration: 2000,
              animation: "pop",
            });
          }}
        >
          Trigger Success
        </button>

        <button
          onClick={() => {
            triggerNotification({
              type: "info",
              message: "Your friend is online",
              duration: 3000,
              animation: "fade",
            });
          }}
        >
          Trigger Info
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "warning",
              message: "you are offline",
              duration: 4000,
              animation: "pop",
            });
          }}
        >
          Trigger Warning
        </button>

        <button
          onClick={() => {
            triggerNotification({
              type: "error",
              message: "Something went wrong",
              duration: 5000,
              animation: "slide",
            });
          }}
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
}
