import { createContext, useState, useContext } from "react";
import { PageContainer } from "../components/page-container";

// Step 1: Create Context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Step 2: Provide the Context
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Consume the Context
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

// Step 4: Use the Provider
const ContextExample = () => {
  return (
    <ThemeProvider>
      <PageContainer>
        <ThemeToggler />
      </PageContainer>
    </ThemeProvider>
  );
};

export { ContextExample };
