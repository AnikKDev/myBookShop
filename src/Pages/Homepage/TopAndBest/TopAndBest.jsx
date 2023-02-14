import axios from "axios";
import React, { useEffect, useState } from "react";
import BestSeller from "./BestSeller/BestSeller";
import TopRated from "./TopRated/TopRated";

const TopAndBest = () => {
  const [topAndBest, setTopAndBest] = useState({});
  useEffect(() => {
    axios.get("topAndBest.json").then((res) => {
      res.status === 200 ? setTopAndBest(res.data) : setTopAndBest({});
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
      className="grid grid-cols-1 my-20 justify-items-center lg:grid-cols-2
      gap-6"
    >
      <TopRated productData={topAndBest.topRated} />
      <BestSeller productData={topAndBest.bestSeller} />
    </div>
  );
};

export default TopAndBest;
