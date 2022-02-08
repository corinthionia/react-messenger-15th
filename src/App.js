import { useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  function setScreenSize() {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyle />
      <div>하이</div>
    </>
  );
}

export default App;
