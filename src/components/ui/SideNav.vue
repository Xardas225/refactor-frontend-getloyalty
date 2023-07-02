<template>
  <div
    id="layout-sidenav"
    class="layout-sidenav sidenav sidenav-vertical bg-lighter"
  >
    <div
      class="app-brand cursor-pointer layout-sidenav-toggle justify-content-center demo"
    >
      <img
        class="app-brand-logo demo"
        src="/img/layout/logo.png"
        alt="getloyalty"
      />
      <div class="app-brand-text demo sidenav-text font-weight-semibold ml-2">
        getloyalty
      </div>
    </div>

    <div class="sidenav-divider mt-0"></div>

    <!-- Links -->
    <ul id="nav_main" class="sidenav-inner py-1 ps">
      <li
        id="nav_platforms"
        class="sidenav-item active open"
        data-cat="platforms"
        style=""
      >
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
          ><i class="sidenav-icon fas fa-star"></i>Площадки</a
        >
        <ul class="sidenav-menu">
          <li id="nav_dashboard" class="sidenav-item" data-cat="dashboard">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
              >Дашборды</a
            >
            <ul class="sidenav-menu">
              <li
                id="nav_indicators"
                class="sidenav-item"
                data-subcat="indicators"
              >
                <a
                  href="/Page/router.php?page=platform/dashboard_indicators"
                  class="sidenav-link"
                  data-subcat="indicators"
                  >Показатели</a
                >
              </li>
              <li
                id="nav_platforms"
                class="sidenav-item"
                data-subcat="platforms"
              >
                <a
                  href="/Page/router.php?page=platform/dashboard_rating"
                  class="sidenav-link"
                  data-subcat="platforms"
                  >Рейтинги</a
                >
              </li>
              <li id="nav_reviews" class="sidenav-item" data-subcat="reviews">
                <a
                  href="/Page/router.php?page=platform/dashboard_stat"
                  class="sidenav-link"
                  data-subcat="reviews"
                  >Статистика</a
                >
              </li>
              <li id="nav_answers" class="sidenav-item" data-subcat="answers">
                <a
                  href="/Page/router.php?page=platform/dashboard_reply"
                  class="sidenav-link"
                  data-subcat="answers"
                  >Ответы</a
                >
              </li>
            </ul>
          </li>
          <li
            id="nav_reviews"
            class="sidenav-item active"
            data-subcat="reviews"
          >
            <a href="/platforms" class="sidenav-link" data-subcat="reviews"
              >Отзывы</a
            >
          </li>
          <li
            id="nav_platformCatalogue"
            class="sidenav-item"
            data-subcat="platformCatalogue"
          >
            <a
              href="/Page/router.php?page=platform/catalogue"
              class="sidenav-link"
              data-subcat="platformCatalogue"
              >Платформы</a
            >
          </li>
          <li id="nav_reports" class="sidenav-item" data-subcat="reports">
            <a
              href="/Page/router.php?page=platform/reports"
              class="sidenav-link"
              data-subcat="reports"
              >Отчёты</a
            >
          </li>
        </ul>
      </li>
      <li id="nav_polls" class="sidenav-item" data-cat="polls">
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
          ><i class="sidenav-icon fas fa-list-ul"></i>Опросы</a
        >
        <ul class="sidenav-menu">
          <li
            id="nav_subDashboard"
            class="sidenav-item"
            data-cat="subDashboard"
          >
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
              >Дашборды</a
            >
            <ul class="sidenav-menu">
              <li id="nav_channels" class="sidenav-item" data-subcat="channels">
                <a
                  href="/Page/router.php?page=poll/dashboard_channels"
                  class="sidenav-link"
                  data-subcat="channels"
                  >Каналы</a
                >
              </li>
              <li
                id="nav_technologies"
                class="sidenav-item"
                data-subcat="technologies"
              >
                <a
                  href="/Page/router.php?page=poll/dashboard_technologies"
                  class="sidenav-link"
                  data-subcat="technologies"
                  >Технологии</a
                >
              </li>
            </ul>
          </li>
          <li id="nav_subPolls" class="sidenav-item" data-cat="subPolls">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
              >Опросы</a
            >
            <ul class="sidenav-menu">
              <li id="nav_progress" class="sidenav-item" data-subcat="progress">
                <a
                  href="/polls/progress"
                  class="sidenav-link"
                  data-subcat="progress"
                  >Активные</a
                >
              </li>
              <li
                id="nav_completed"
                class="sidenav-item"
                data-subcat="completed"
              >
                <a
                  href="/polls/completed"
                  class="sidenav-link"
                  data-subcat="completed"
                  >Завершенные</a
                >
              </li>
              <li id="nav_await" class="sidenav-item" data-subcat="await">
                <a href="/polls/await" class="sidenav-link" data-subcat="await"
                  >Черновики</a
                >
              </li>
              <li id="nav_deleted" class="sidenav-item" data-subcat="deleted">
                <a
                  href="/polls/deleted"
                  class="sidenav-link"
                  data-subcat="deleted"
                  >Корзина</a
                >
              </li>
            </ul>
          </li>
          <li id="nav_votes" class="sidenav-item" data-subcat="votes">
            <a
              href="/Page/router.php?page=votes"
              class="sidenav-link"
              data-subcat="votes"
              >Голоса</a
            >
          </li>
          <li id="nav_clients" class="sidenav-item" data-subcat="clients">
            <a href="/clients" class="sidenav-link" data-subcat="clients"
              >Участники</a
            >
          </li>
        </ul>
      </li>
      <li id="nav_analytics" class="sidenav-item" data-cat="analytics">
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
          ><i class="sidenav-icon fas fa-chart-pie"></i>Аналитика</a
        >
        <ul class="sidenav-menu">
          <li id="nav_opinion" class="sidenav-item" data-cat="opinion">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
              >Мнения</a
            >
            <ul class="sidenav-menu">
              <li id="nav_reviews" class="sidenav-item" data-subcat="reviews">
                <a
                  href="/Page/router.php?page=analytics/dashboard_reviews"
                  class="sidenav-link"
                  data-subcat="reviews"
                  >Отзывы</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li id="nav_settings" class="sidenav-item" data-cat="settings">
        <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"
          ><i class="sidenav-icon fas fa-cog"></i>Настройки</a
        >
        <ul class="sidenav-menu">
          <li id="nav_profile" class="sidenav-item" data-subcat="profile">
            <a href="/profile" class="sidenav-link" data-subcat="profile"
              >Профиль</a
            >
          </li>
          <li id="nav_contacts" class="sidenav-item" data-subcat="contacts">
            <a href="/contacts" class="sidenav-link" data-subcat="contacts"
              >Рассылка</a
            >
          </li>
          <li id="nav_company" class="sidenav-item" data-subcat="company">
            <a href="/company" class="sidenav-link" data-subcat="company"
              >Компания</a
            >
          </li>
          <li id="nav_filials" class="sidenav-item" data-subcat="filials">
            <a href="/filials" class="sidenav-link" data-subcat="filials"
              >Филиалы</a
            >
          </li>
          <li id="nav_projects" class="sidenav-item" data-subcat="projects">
            <a href="/projects" class="sidenav-link" data-subcat="projects"
              >Проекты</a
            >
          </li>
          <li id="nav_users" class="sidenav-item" data-subcat="users">
            <a href="/users" class="sidenav-link" data-subcat="users"
              >Сотрудники</a
            >
          </li>
          <li id="nav_source" class="sidenav-item" data-subcat="source">
            <a
              href="/source/catalogue"
              class="sidenav-link"
              data-subcat="source"
              >Интеграции</a
            >
          </li>
          <li id="nav_feed" class="sidenav-item" data-subcat="feed">
            <a
              href="/Page/router.php?page=platform/settings/feed"
              class="sidenav-link"
              data-subcat="feed"
              >Выгрузки</a
            >
          </li>
        </ul>
      </li>
      <li id="nav_getloyalty" class="sidenav-item" data-cat="getloyalty">
        <a
          href="/Page/router.php?page=news"
          class="sidenav-link"
          data-cat="getloyalty"
          ><i class="sidenav-icon fas fa-graduation-cap"></i>База знаний</a
        >
      </li>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; right: 4px">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 0px"
        ></div>
      </div>
    </ul>
  </div>
</template>
