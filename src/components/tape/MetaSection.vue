<template>
  <div class="card border-0">
    <div class="card-body pb-3 pt-0 px-2">
      <div class="card-header pb-1 mx-3">
        <!-- Заголовок секции -->
        <span>Оценки</span>
      </div>
      <div id="reviews-rating" class="show">
        <div class="table-responsive">
          <table id="rating-meta" class="table card-table m-0">
            <tbody>
              <!-- Строка для отображения общего количества отзывов -->
              <tr>
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  Всего
                </td>
                <td
                  colspan="2"
                  class="border-top-0 text-nowrap text-right align-middle text-muted rate-count"
                  v-html="reviewsStore.meta.count"
                ></td>
              </tr>

              <!-- Цикл для отображения рейтинга и прогресса -->
              <template
                v-for="(score, index) in reviewsStore.meta.rating"
                :key="score"
              >
                <tr>
                  <td
                    class="border-top-0 text-nowrap align-middle text-muted"
                    v-html="getScore(index)"
                  ></td>
                  <td class="w-100 border-top-0 align-middle">
                    <ProgressBar :value="getProgressValue(score)" />
                  </td>
                  <td
                    class="border-top-0 text-nowrap align-middle text-muted rate-count"
                    v-html="score"
                  ></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ProgressBar from "./ProgressBar.vue";
import { useReviewsStore } from "@/store/reviews-store";

// Использование хранилища отзывов
const reviewsStore = useReviewsStore();

// Получение метаданных при монтировании компонента
onMounted(async () => {
  await reviewsStore.fetchMetaData();
});

// Функция для получения значения прогресса
const getProgressValue = (score: number): number => {
  return (score / reviewsStore.meta.count) * 100;
};

// Функция для получения рейтинга
const getScore = (index: number): number | string => {
  return reviewsStore.meta.rating.length - (index + 1);
};
</script>

<style scoped>
.card-header {
  padding: 0.875rem 1.5rem;
  padding-bottom: 0.875rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid rgba(24, 28, 33, 0.06);
}
</style>
