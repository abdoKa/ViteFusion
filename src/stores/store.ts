import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface RatingStore {
  rating: number;
  maxRating: number;
  increment: () => void;
  setRating: (value: number) => void;
  reset: () => void;
}

const useRatingStore = create<RatingStore>((set) => ({
  rating: 0,
  maxRating: 5,
  increment: () =>
    set((store) => {
      if (store.rating < store.maxRating) {
        return { rating: store.rating + 1 };
      }
      return {};
    }),
  setRating: (value: number) =>
    set(() => {
      if (value >= 0 && value <= 5) {
        return { rating: value };
      }
      return {};
    }),
  reset: () => set(() => ({ rating: 0 })),
}));

if (import.meta.env.VITE_APP_ENVIREMENT === "development")
  mountStoreDevtool("Rating Store", useRatingStore);

export default useRatingStore;
