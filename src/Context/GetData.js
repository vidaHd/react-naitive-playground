import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import * as api from "../api";

export const FormData = createContext({});

const FromDataProvider = ({ children }) => {
  const [state, setState] = useState({});

  const { data } = api.getAllProduct("https://api.freerealapi.com/blogs");
  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return (
    <>
      <FormData.Provider value={{ state, setState }}>
        {children}
      </FormData.Provider>
    </>
  );
};

export function useFormData() {
  return useContext(FormData);
}

export default FromDataProvider;
