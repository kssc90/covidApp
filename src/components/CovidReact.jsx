import { useEffect, useState } from "react";
import './CovidReact.css'

export function CovidReact() {
  let [data, setData] = useState("");

  const getCovidData = () => {
    fetch("https://data.covid19india.org/data.json")
      .then((res) => res.json())
      .then((apiData) => {
        const stateData = apiData.statewise[0]
        console.log(stateData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name">
                  <span>OUR </span> COUNTRY
                </p>
                <p className="card_total card_small">INDIA</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
