import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const signOut = () => {
    const cookies = new Cookies(null, { path: "/" });
    cookies.remove("user");
    router.push("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
