import React from "react";

export type Movie = {
  id: number;
  imageUrl: string;
  name: string;
  genre: string;
  year: string;
};

export type MovieCardsState = {
  movies: Movie[];
};

export type MovieCardsProps = {
  children: React.ReactNode;
};
