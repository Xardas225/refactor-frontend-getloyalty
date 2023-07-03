<template>
  <div class="card">
    <div class="card-body pb-3 pt-0 px-2">
      <div class="card-header pb-1 mx-3">
        <span>Оценки</span>
      </div>
      <div id="reviews-rating" class="show">
        <div class="table-responsive">
          <table id="rating-meta" class="table card-table m-0">
            <tbody>
              <tr>
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  Всего
                </td>
                <td
                  colspan="2"
                  class="border-top-0 text-nowrap text-right align-middle text-muted rate-count"
                >
                  285
                </td>
              </tr>

              <tr>
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  5
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <ProgressBar />
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  201
                </td>
              </tr>

              <tr data-rate="4">
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  4
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <div class="progress" style="height: 4px">
                    <div class="progress-bar" style="width: 10%"></div>
                  </div>
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  26
                </td>
              </tr>
              <tr data-rate="3">
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  3
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <div class="progress" style="height: 4px">
                    <div class="progress-bar" style="width: 4%"></div>
                  </div>
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  9
                </td>
              </tr>
              <tr data-rate="2">
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  2
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <div class="progress" style="height: 4px">
                    <div class="progress-bar" style="width: 2%"></div>
                  </div>
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  4
                </td>
              </tr>
              <tr data-rate="1">
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  1
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <div class="progress" style="height: 4px">
                    <div class="progress-bar" style="width: 10%"></div>
                  </div>
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  26
                </td>
              </tr>
              <tr data-rate="0">
                <td class="border-top-0 text-nowrap align-middle text-muted">
                  <font-awesome-icon icon="fa-solid fa-ban" />
                </td>
                <td class="w-100 border-top-0 align-middle">
                  <div class="progress" style="height: 4px">
                    <div class="progress-bar" style="width: 7%"></div>
                  </div>
                </td>
                <td
                  class="border-top-0 text-nowrap align-middle text-muted rate-count"
                >
                  19
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "./ProgressBar.vue";

const getData = async () => {};

const data = {
  status: 200,
  meta: {
    count: 287,
    has_discuss: 0,
    has_text: 286,
    has_answer: 185,
    rating: [18, 27, 5, 9, 26, 202],
  },
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
