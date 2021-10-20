import React, { useState, useEffect } from "react";
import Past from "./Past";
import Upcomig from "./Upcoming";

const Launches = () => {
  return (
    <div>
      <h1>Launches</h1>

      <div>
        <Upcomig />
        <Past />
      </div>
    </div>
  );
};

export default Launches;
