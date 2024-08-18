// study concept api polling
// call api on delay of  given time
// if thousand of messages came then , remove or vanished old message from dom

import ChatUI from "./components/Chat";

const VideoStreamChatUI = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div
        style={{ width: "800px", height: "600px", border: "1px solid black" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BAW_RFcFmIU?si=8P-hBSBQl9q5TcL_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <ChatUI />
    </div>
  );
};

export default VideoStreamChatUI;
