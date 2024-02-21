import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
`;

const Sign = () => {
  const [username, setUsername] = useState("ignacio");
  const [onBlurUsername, setOnBlurUsername] = useState(false);
  const [password, setPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(username, password);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  console.log(username, password);

  const validate = () => {
    return username.length > 0 && password.length > 0;
  };
  const isValid = validate();

  return (
    <Form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        name="username"
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleOnChange}
        onBlur={() => setOnBlurUsername(true)}
      />
      {onBlurUsername && password.length < 8 && (
        <p>Password must be at least 8 characters</p>
      )}
      <button onClick={handleOnSubmit}>Sign In</button>
    </Form>
  );
};

export { Sign };
