import React, { useState, useEffect } from "react";
import moment from "moment";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const Upcoming = () => {
  const [apiData, setApiData] = useState({
    data: null,
    loading: false,
    error: false,
  });

  //   new Date(dt.setFullYear(dt.getFullYear() + n));
  const dt = new Date(2018, 10, 2);
  const newDate = new Date(dt.setFullYear(dt.getFullYear() + 4));

  console.log(newDate);

  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches/upcoming";

    async function fetchData() {
      setApiData({ ...apiData, loading: true });
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log("ccc", res);
          setApiData({ ...apiData, data: res, loading: false });
        })
        .catch((e) => setApiData({ ...apiData, error: e }));
    }
    fetchData();
  }, []);

  console.log("datas", apiData.data);

  return (
    <div>
      <h3>Upcoming Launches</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "30%",
        }}
      >
        {apiData.data &&
          apiData.data.map((item) => (
            <Link
              to={{
                pathname: `/details/${item.flight_number}`,
                state: {
                  info: item,
                },
              }}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div
                style={{
                  border: "1px solid white",
                  height: "15em",
                  background: "green",
                }}
              >
                <li style={{ listStyle: "none" }}>
                  <div style={{ marginTop: "1em" }}>
                    Mission Name: {item.mission_name}
                  </div>

                  <div style={{ marginTop: "1em" }}>
                    Rocket Name: {item.rocket.rocket_name}
                  </div>

                  <div style={{ marginTop: "1em" }}>
                    Launch Site: {item.launch_site.site_name_long}
                  </div>

                  <div style={{ marginTop: "1.5em" }}>
                    <strong>Countdown</strong>
                  </div>
                  <div>days:hrs:min:sec</div>

                  <div>
                    <Countdown
                      date={new Date(item.launch_date_local).setFullYear(
                        new Date(item.launch_date_local).getFullYear() + 4
                      )}
                    />
                  </div>
                </li>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Upcoming;
