import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const Sign = () => {
  const router = useRouter();
  const handleOnclick = () => {
    const cookies = new Cookies(null, { path: "/" });
    cookies.set("user", "chona");
    router.push("/app");
  };

  return (
    <div>
      <button onClick={handleOnclick}>Sign</button>
    </div>
  );
};

export default Sign;
