import { defineStore } from 'pinia';

// Определение интерфейса для метаданных
interface MetaData {
  count: number;
  has_discuss: number;
  has_text: number;
  has_answer: number;
  rating: number[];
}
interface ReviewData {
  id: number;
  source_hash_key: string;
  date: number;
  rating: number;
  tonal: string;
  is_other_comments: boolean;
  user_name: string;
  review_link: string | null;
  text: string;
  first_comment: string | null;
  user_link: string | null;
  user_avatar_link: string;
  created_at: string;
  updated_at: string;
  external_id: string;
  params: string | null;
  classes: string | null;
  transit_replier_meta: string | null;
  deleted_at: string | null;
  is_classified: number;
}

// Определение интерфейса для состояния
interface ReviewsState {
  meta: MetaData;
  reviews: Array<ReviewData>
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
    reviews: []
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
        this.meta = { ...data, rating: data.rating.reverse() }
      } catch (error: any) {
        console.error(error.message)
      }
    },
    async getReviewData() {
      try {
        // fetch data
        this.reviews = [
          {
            "deleted_at": null,
            "id": 36759394,
            "source_hash_key": "b034d8fb8601be4402d55ee98b272bc7",
            "date": 1688342400,
            "rating": 5,
            "tonal": "POSITIVE",
            "is_other_comments": false,
            "user_name": "Таир",
            "review_link": null,
            "text": "Все отлично!",
            "first_comment": null,
            "user_link": null,
            "user_avatar_link": "https://50.img.avito.st/image/1/1.o7w1kLa2GVUDN41Tf7aRgdwzD1-LswnXhzMN.uIhsHW-5wwEsIKEhI5JIQ7IBdCzJCLmwp_L3dX954Pw",
            "created_at": "2023-07-03T14:38:59.000000Z",
            "updated_at": "2023-07-03T14:40:55.000000Z",
            "external_id": "3c94ea1aab86d4b5557493accb11ddae",
            "params": null,
            "is_classified": 1,
            "classes": null,
            "transit_replier_meta": null
          },
          {
            "deleted_at": null,
            "id": 36764422,
            "source_hash_key": "da0cbab1571b855b7e5efe949e9c2d63",
            "date": 1688316598,
            "rating": 5,
            "tonal": "POSITIVE",
            "is_other_comments": false,
            "user_name": "Марина Баркова",
            "review_link": null,
            "text": "Ходили с мамой на Мадмуазель Нитушь, просто сказка, позитивнейшие эмоции, шикарные костюмы, Мария Аронова просто бесподобна! Сам театр красивый, есть залы истории театра, очень интересно, красиво и познавательно.  Посетили исторический буфет, все замечательно каждый прекрасно может провести время.",
            "first_comment": null,
            "user_link": null,
            "user_avatar_link": "https://avatars.mds.yandex.net/get-yapic/63032/fmfh3OUZZ8pea1dRnVWkMVEMEBs-1/islands-68",
            "created_at": "2023-07-03T16:32:02.000000Z",
            "updated_at": "2023-07-03T16:33:26.000000Z",
            "external_id": "7YAILKlwlD6QlCvu8PjYCvpr5SzS54jv",
            "params": null,
            "is_classified": 1,
            "classes": "{\"name\":true,\"tone\":true,\"term\":true}",
            "transit_replier_meta": null
          }
        ]
      } catch (error) {
        console.error(error)
      }
    }
  },
});
