/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import Todo from "./machine-coding/todo/Todo";
import TodoRootLayout from "./machine-coding/todo/TodoRootLayout/TodoRootLayout";
import AuthenticationRootLayout from "./machine-coding/userAuthantication/authenticationRootLayout/AuthenticationRootLayout";
import CountDownTimer from "./machine-coding/countdownTimer/CountDownTimer";
import Sudoku from "./machine-coding/sudoku/Sudoku";
import NotificationRoot from "./systemDesign/notification/NotificationRoot";
import ShimmerUI from "./machine-coding/shimmerUI/ShimmerUI";
import ProtectedRoute from "./machine-coding/protectedRoute/ProtectedRoute";
import InfiniteScroll from "./machine-coding/infiniteScroll/InfiniteScroll";
import Accordion from "./machine-coding/accordion/Accordion";
import NestedComments from "./machine-coding/nestedComments/NestedCommnets";
import Pagination from "./machine-coding/pagination/Pagination";
import VideoStreamChatUI from "./machine-coding/videoStreamChatUI/VideoStreamChatUI";
import GoogleSearch from "./machine-coding/search&auto-complete/GoogleSearch";
import GenerateCircle from "./machine-coding/GenrateCircle/GenrateCircle";
import InstagramComments from "./machine-coding/InstagramComment/InstagramComments";

function App() {
  return (
    <>
      {/* <TodoRootLayout /> */}
      {/* <AuthenticationRootLayout/> */}
      {/* <CountDownTimer/> */}
      {/* <Sudoku/> */}
      {/* <NotificationRoot/> */}
      {/* <ShimmerUI/> */}
      {/* <ProtectedRoute/> */}
      {/* <InfiniteScroll/> */}
      {/* <Accordion/> */}
      <NestedComments/>
      {/* <Pagination/> */}
      {/* <VideoStreamChatUI/> */}
      {/* <GoogleSearch/> */}
      {/* <GenerateCircle/> */}
      {/* <InstagramComments/> */}
    </>
  );
}

export default App;
