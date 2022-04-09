import React, { useContext, useState } from "react";

const StatisticsContext = React.createContext();
//provider oluşturmuş olduk.
const StatisticsProvider = ({ children }) => {
  //datayı aktaracağımız stateti oluşturduk.
 /*  const [statisticsList, setstatisticsList] = useState([]); */

 

  return (
    <StatisticsContext.Provider value={{}}>
      {children}
    </StatisticsContext.Provider>
  );
};

function useStatistics() {
  return useContext(StatisticsContext);
}

export { StatisticsProvider, StatisticsContext, useStatistics };
