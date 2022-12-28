import { SortingOptionsType } from "../../../../../types/sortingOptions.type";

export const sortingOptions: Array<SortingOptionsType> = [
  {
    optionName: "Release Date",
    sortBy: "release_date",
  },
  {
    optionName: "Rating",
    sortBy: "vote_average",
  },
  {
    optionName: "Runtime",
    sortBy: "runtime",
  },
];
