<template>
  <nav
    class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-lighter container-p-x"
    id="layout-navbar"
  >
    <!-- Brand demo (see assets/css/demo/demo.css) -->
    <a href="polls" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
      <img class="long-logo" src="/img/layout/logo_long.png" alt="getloyalty" />
    </a>

    <!-- Sidenav toggle (see assets/css/demo/demo.css) -->
    <div
      class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto"
    >
      <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:void(0)">
        <i class="fas fa-bars"></i>
      </a>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#layout-navbar-collapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="layout-navbar-collapse">
      <!-- Divider -->
      <hr class="d-lg-none w-100 my-2" />

      <div class="navbar-nav align-items-lg-center"></div>

      <div class="navbar-nav align-items-lg-center ml-auto">
        <!-- Notifications -->
        <div class="bell__notifications__wrap dropleft">
          <div
            class="bell__notifications"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="bell fa fa-bell"></span>
            <span
              class="d-none badge badge-notifications badge-dot indicator"
            ></span>
          </div>
          <div class="notifications-dropdown dropdown-menu dropdown-menu-left">
            <div class="notifications__list">
              <div
                class="notifications__list__element list-group list-group-flush"
              >
                <a
                  href="#"
                  class="notifications__list__element-link list-group-item list-group-item-action media d-flex align-items-center"
                >
                  <div class="notifications__list__element-icon border-0">
                    <img
                      class="app-brand-logo demo bg-primar"
                      src="/img/layout/logo.png"
                      alt="getloyalty"
                    />
                  </div>
                  <div class="media-body line-height-condenced ml-3">
                    <div class="notifications__list__element-title text-body">
                      Нет уведомлений
                    </div>
                    <div
                      class="notifications__list__element-desc text-light small mt-1"
                    >
                      В этом разделе вы будете видеть уведомления по вашей
                      активности в кабинете Getloyalty
                    </div>
                    <div
                      class="notifications__list__element-date text-light small mt-1"
                    >
                      20:07 02.07.2023
                    </div>
                    <span
                      class="notifications__list__element-indicator d-none badge badge-primary badge-dot indicator"
                    ></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="notifications__list__element__pattern" class="d-none">
          <div class="notifications__list__element list-group list-group-flush">
            <a
              href=""
              class="notifications__list__element-link list-group-item list-group-item-action media d-flex align-items-center"
            >
              <div class="notifications__list__element-icon border-0"></div>
              <div class="media-body line-height-condenced ml-3">
                <div class="notifications__list__element-title text-body"></div>
                <div
                  class="notifications__list__element-desc text-light small mt-1"
                ></div>
                <div
                  class="notifications__list__element-date text-light small mt-1"
                ></div>
                <span
                  class="notifications__list__element-indicator d-none badge badge-primary badge-dot indicator"
                ></span>
              </div>
            </a>
          </div>
        </div>

        <div class="demo-navbar-user nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
            <span
              class="d-inline-flex flex-lg-row-reverse align-items-center align-middle"
            >
              <img
                src="/img/user/5/47268.jpg"
                alt=""
                class="d-block ui-w-30 rounded-circle"
              />
              <span id="user_name" class="px-1 mr-lg-2 ml-2 ml-lg-0"
                >Getloyalty</span
              >
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="/profile" class="dropdown-item"
              ><i class="ion ion-ios-person text-lightest"></i> &nbsp;
              Профиль</a
            >
            <div class="dropdown-divider"></div>
            <a href="/action/logout" class="dropdown-item"
              ><i class="ion ion-ios-log-out text-danger"></i> &nbsp; Выход</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
