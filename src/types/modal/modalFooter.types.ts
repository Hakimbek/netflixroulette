export type ModalFooterTypes = {
  props: {
    title: string;
    setTitle: (e: string) => void;
    release: string;
    setRelease: (e: string) => void;
    url: string;
    setUrl: (e: string) => void;
    rating: string;
    setRating: (e: string) => void;
    runtime: string;
    setRuntime: (e: string) => void;
    overview: string;
    setOverview: (e: string) => void;
    genre: string[];
    setGenre: (e: string[]) => void;
  };
  requestMethod: () => string;
};
