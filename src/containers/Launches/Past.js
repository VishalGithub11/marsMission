import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Past = () => {
  const [apiData, setApiData] = useState({
    data: null,
    loading: false,
    error: false,
  });

  const style = {
    width: "100%",
    maxWidth: "90%",
    bgcolor: "green",
  };

  useEffect(() => {
    const url = "https://api.spacexdata.com/v3/launches/past";

    async function fetchData() {
      setApiData({ ...apiData, loading: true });
      await fetch(url)
        .then((res) => res.json())
        .then((res) => setApiData({ ...apiData, data: res, loading: false }))
        .catch((e) => setApiData({ ...apiData, error: e }));
    }
    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <h2>Previous Launches</h2>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <div>
          <ListItem button>
            <ListItemText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3> Mission Name </h3>
                </div>
                <div>
                  <h3> Launched Date </h3>
                </div>
              </div>
            </ListItemText>
          </ListItem>
          <Divider />

          {apiData.data &&
            apiData.data.map((item) => (
              <>
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
                  <ListItem button>
                    <ListItemText>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div> {item.mission_name}</div>
                        <div>{item.launch_year}</div>
                      </div>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Divider />
              </>
            ))}
        </div>
      </List>
    </div>
  );
};

export default Past;
