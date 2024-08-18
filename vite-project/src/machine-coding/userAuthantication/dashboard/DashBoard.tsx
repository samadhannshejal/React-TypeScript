import { logoutUser } from "../authService/authService";

const DashBoard = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>WelCome to DashBoard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
