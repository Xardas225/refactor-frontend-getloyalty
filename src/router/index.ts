import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';

// Динамические роуты
const ReviewsView = () => import('@/views/platform/reviews/ReviewsView.vue')
const ProfileView = () => import('@/views/settings/ProfileView.vue')
const ContactsView = () => import('@/views/settings/ContactsView.vue')
const EmployeesView = () => import('@/views/settings/EmployeesView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
