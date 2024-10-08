import { atom, selector } from "recoil";
import axios from "axios";

export const allTourAtom = atom({
  key: "allTourAtom",
  default: selector({
    key: "allTourSelector",
    get: async () => {
      const response = await axios.get("http://localhost:5000/api/v1/tours");
      // console.log(response.data.data.data);
      return response.data.data;
    },
  }),
});

export const tourDetailAtom = atom({
  key: "tourDetailAtom",
  default: selector({
    key: "ourDetailSelector",
    get: async () => {
      // const response = await axios.get("http://localhost:5000/api/v1/tours");
      // console.log(response.data.data.data);
      // return response.data.data;
    },
  }),
});
