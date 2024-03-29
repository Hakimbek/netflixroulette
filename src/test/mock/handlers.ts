import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/movies", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            title: "La La Land",
            tagline: "Here's to the fools who dream.",
            vote_average: 7.9,
            vote_count: 6782,
            release_date: "2016-12-29",
            poster_path:
              "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
            overview:
              "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
            budget: 30000000,
            revenue: 445435700,
            runtime: 128,
            genres: ["Comedy", "Drama", "Romance"],
            id: 313369,
          },
        ],
        total: 0,
        offset: 0,
        limit: 0,
      })
    );
  }),
];
