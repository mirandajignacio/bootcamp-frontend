import "./App.css";
import { Navbar } from "./components/navbar";

function App() {
  const name = "John Doe";

  const renderName = () => {
    return <h1>My name is John Doe</h1>;
  };

  return (
    <>
      <Navbar name="Chona" />
      <h1>Title</h1>
      <p>Paragraph {name} </p>
      {renderName()}
    </>
  );
}

export default App;
