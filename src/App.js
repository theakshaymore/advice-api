import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const generateAdvice = (e) => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setAdvice(data.slip);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    generateAdvice();
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <br />
        <div class="card">
          <div class="card-header">YOUR ADVICE✨</div>
          <br />
          <div class="card-body">
            <h5 class="card-title">
              <div className="alert alert-secondary" role="alert">
                {advice.advice}
              </div>
            </h5>
            <br />
            <button class="btn btn-secondary" onClick={refreshPage}>
              Get Another Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
