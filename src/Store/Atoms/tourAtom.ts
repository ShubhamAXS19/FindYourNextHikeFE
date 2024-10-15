import { atom, selector } from "recoil";
import { ITour } from "../../app/Types/tour";
// Define the atom with an empty array as the default value
export const allTourAtom = atom<ITour[]>({
  key: "allTourAtom",
  default: [],
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
