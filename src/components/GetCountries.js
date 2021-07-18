import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_COUNTRIES } from "../GraphQL/Queries";

function GetCountries() {
  const { error, loading, data } = useQuery(LOAD_COUNTRIES);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
      if(data){
        console.log(data.countries[0]);
        setCountries(data.countries[0]);
      }
    
    
  }, [data]);

  return <div></div>;
}

export default GetCountries;
