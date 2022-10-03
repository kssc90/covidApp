import { useEffect, useState } from "react";
import "./CovidReact.css";

export function CovidReact() {
  let [data, setData] = useState([]);

  const dataList = [
    { tag1: "OUR ", tag2: " COUNTRY", link: data.country },
    { tag1: "TOTAL ", tag2: " RECOVERED", link: data.recovered },
    { tag1: "TOTAL ", tag2: " CONFIRMED", link: data.confirmed },
    { tag1: "TOTAL ", tag2: " DEATHS", link: data.deaths },
    { tag1: "TOTAL ", tag2: " ACTIVE", link: data.active },
    { tag1: "LAST ", tag2: " UPDATED", link: data.lastupdatedtime },
  ];

  const getCovidData = () => {
    fetch("https://data.covid19india.org/data.json")
      .then((res) => res.json())
      .then((apiData) => {
        const newApiData = {
          country: "INDIA",...apiData.statewise[0]
        };
        setData(newApiData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        {console.log(data)}

        <ul>
          {dataList.map((item) => {
            return (
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span>{item.tag1}</span>
                    {item.tag2}
                  </p>
                  <p className="card_total card_small">{item.link}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
}
