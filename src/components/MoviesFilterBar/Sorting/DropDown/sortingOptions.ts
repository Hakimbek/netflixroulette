import { SortingOptionsType } from "../../../../types/sortingOptions.type";

export const sortingOptions: Array<SortingOptionsType> = [
  {
    optionName: "Nothing",
    sortBy: "",
    sortOrder: "",
  },
  {
    optionName: "Release Date",
    sortBy: "release_date",
    sortOrder: "asc",
  },
  {
    optionName: "Rating",
    sortBy: "vote_average",
    sortOrder: "asc",
  },
  {
    optionName: "Runtime",
    sortBy: "runtime",
    sortOrder: "asc",
  },
];
