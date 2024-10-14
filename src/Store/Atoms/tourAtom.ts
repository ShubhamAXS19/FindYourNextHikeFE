import { atom, selector } from "recoil";
import { ITour } from "../../app/Types/tour";
// Define the atom with an empty array as the default value
export const allTourAtom = atom<ITour[]>({
  key: "allTourAtom",
  default: [],
});

// // Define a selector to fetch the tour data
// export const allTourSelector = selector({
//   key: "allTourSelector",
//   get: async ({ get }) => {
//     const currentTours = get(allTourAtom);
//     if (currentTours.length > 0) {
//       return currentTours;
//     }

//     try {
//       const response = await axios.get("http://localhost:5000/api/v1/tours");
//       return response.data.data.data;
//     } catch (error) {
//       console.error("Error fetching tours:", error);
//       throw error;
//     }
//   },
// });

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
