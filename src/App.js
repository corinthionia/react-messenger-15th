import { useEffect } from "react";

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

  return <div> 테스트 하하</div>;
}

export default App;
