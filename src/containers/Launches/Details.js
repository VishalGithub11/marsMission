import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const info = location.state.info;
  console.log(info);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ padding: "1em" }}>
        <strong>{info.mission_name}</strong>
      </div>

      <div style={{ padding: "1em", textAlign: "left" }}>
        Launch Date: {info.launch_date_local.split("T")[0]}
      </div>

      <div style={{ padding: "1em", textAlign: "left" }}>
        Rocket Name: {info.rocket.rocket_name}
      </div>

      <div style={{ padding: "1em", textAlign: "left" }}>
        Launch Site: {info.launch_site.site_name_long}.
      </div>

      <div style={{ padding: "1em", textAlign: "left" }}>
        Manufacturer: {info.rocket.second_stage.payloads[0].manufacturer}
      </div>

      <div style={{ padding: "1em", textAlign: "left" }}>
        Details: {info.details}
      </div>
    </div>
  );
};

export default Details;
