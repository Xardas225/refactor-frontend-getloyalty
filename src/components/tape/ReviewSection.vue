<script setup>
import { defineProps } from "vue";

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

const review = defineProps<ReviewData>();
</script>

<template>
  <div id="review_card_pattern" class="card d-none">
    <div class="review-body d-flex flex-row align-items-top p-4">
      <div class="review-avatar">
        <img
          :src="review.user_avatar_link || '/img/user/placeholder.png'"
          alt=""
          class="d-block ui-w-50 ui-h-50 rounded-circle"
        />
      </div>
      <div class="review-content w-100 pl-2">
        <div class="d-flex justify-content-between">
          <div>
            <span class="review-fio font-weight-semibold">{{ review.user_name }}</span>
            <span>·</span>
            <span class="text-muted">
              <span class="review-time"></span>
              <span class="review-date"></span>
            </span>
            <i
              class="far fas-manage fa-question-circle review-detected"
              data-toggle="popover"
              data-placement="bottom"
            ></i>
          </div>
          <div class="review-rating">
            <div class="ui-stars text-nowrap">
              <div class="ui-star">
                <i class="ion ion-md-star"></i>
                <i class="ion ion-md-star"></i>
              </div>
              <div class="ui-star">
                <i class="ion ion-md-star"></i>
                <i class="ion ion-md-star"></i>
              </div>
              <div class="ui-star">
                <i class="ion ion-md-star"></i>
                <i class="ion ion-md-star"></i>
              </div>
              <div class="ui-star">
                <i class="ion ion-md-star"></i>
                <i class="ion ion-md-star"></i>
              </div>
              <div class="ui-star">
                <i class="ion ion-md-star"></i>
                <i class="ion ion-md-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="review-text py-2"></div>
        <div class="review-source d-flex flex-wrap text-muted">
          <span class="review-platform mr-2"></span>
          <span>·</span>
          <span class="review-filial ml-2 mr-2"></span>
          <span class="external d-none">
            <span>·</span>
            <a class="ml-2 text-muted" href="" target="_blank"
              >Перейти к отзыву</a
            >
          </span>
        </div>
        <div class="review-classes pt-2"></div>
        <div class="review-answered-wrap pt-2">
          <div class="review-comments d-none"></div>
          <div class="review-comments-controls d-none">
            <button
              type="button"
              class="btn btn-outline-primary review-comment-toggle"
              data-toggle="show"
            >
              <i class="fas fa-chevron-down"></i>Показать обсуждение
            </button>
          </div>
        </div>
        <div class="review-reply d-none">
          <div class="form-group mb-1">
            <label class="form-label">Текст ответа</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary mr-2 reply-send">
              <i class="d-none"></i>Отправить ответ
            </button>
            <button type="button" class="btn btn-default mr-2 reply-close">
              Отмена
            </button>
          </div>
        </div>
        <div class="review-controls d-flex justify-content-end">
          <button type="button" class="btn btn-primary mr-2 integration d-none">
            <i class="fas fa-comment-dots"></i>Ответить
          </button>
          <button type="button" class="btn btn-primary d-none" disabled="">
            <i class="fas fa-exclamation-triangle"></i>Пожаловаться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
