import { defineStore } from 'pinia';

// Определение интерфейса для метаданных
interface MetaData {
  count: number;
  has_discuss: number;
  has_text: number;
  has_answer: number;
  rating: number[];
}

// Определение интерфейса для состояния
interface ReviewsState {
  meta: MetaData;
}

export const useReviewsStore = defineStore('reviews-store', {
  // Определение состояния с использованием интерфейса
  state: (): ReviewsState => ({
    meta: {
      count: 0,
      has_discuss: 0,
      has_text: 0,
      has_answer: 0,
      rating: [0, 0, 0, 0, 0, 0],
    },
  }),
  getters: {

  },
  actions: {
    async fetchMetaData() {
      try {
        // fetch data
        const data: MetaData = {
          count: 287,
          has_discuss: 0,
          has_text: 286,
          has_answer: 185,
          rating: [18, 27, 5, 9, 26, 202],
        };
        this.meta = {...data, rating: data.rating.reverse()}
      } catch (error: any) {
        console.error(error.message)
      }
    }
  },
});
