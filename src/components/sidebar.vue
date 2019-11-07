<template>

  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <sidebar-brand />

    <!-- Divider -->
    <hr class="sidebar-divider my-0">


    <!-- <router-link :to="{namme: '/'}" class="nav-link"> test_link </router-link> -->

    <!-- Nav Item - Dashboard -->
    <navitem
      :text="'Dashboard'"
      :href="'/'"
      :fa_icon_class="'fas fa-fw fa-tachometer-alt'"
      />

    <!-- Divider -->
    <sidebar-divider/>

    <!-- Heading -->
    <sidebar-heading v-bind:text="'interface'" />

    <!-- Nav Item - Pages Collapse Menu -->
    <navitem
      :text="'Components'"
      :href="'#'"
      :fa_icon_class="'fas fa-fw fa-cog'"
      :submenu="{'Custom Components': {'Buttons': '/buttons', 'Cards':'/cards'} }"
      :active="'Buttons'"
      />

    <!-- Nav Item - Utilities Collapse Menu -->
    <navitem
      :text="'Utilities'"
      :href="'/'"
      :fa_icon_class="'fas fa-fw fa-wrench'"
      :submenu="{'Custom Utilities':{ 'Colors': '/colors', 'Border':'/border', 'Animations':'/animations','Other':'/other'}}"
      />


    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <sidebar-heading v-bind:text="'Addons'" />

    <!-- Nav Item - Pages Collapse Menu -->
    <navitem
      :text="'Pages'"
      :href="'/'"
      :fa_icon_class="'fas fa-fw fa-folder'"
      :submenu="{'login screens': {'login': '/login', 'Register':'/Register', 'Forgot Password':'/forgot_password'}, 'other pages': {'status_404':'/status_404','blank':'/blank'}}"
      />


    <!-- Nav Item - Charts -->
    <navitem
      v-bind:text="'Charts'"
      :fa_icon_class="'fas fa-fw fa-chart-area'"
    />

    <!-- Nav Item - Tables -->
    <navitem
      v-bind:text="'Tables'"
      :fa_icon_class="'fas fa-fw fa-table'"
    />

    <!-- Nav Item - Tables -->
    <navitem
      v-bind:text="'vuetable2'"
      :fa_icon_class="'fas fa-fw fa-table'"
    />

    <!-- Nav Item - Tables -->
    <navitem
      v-bind:text="'credits'"
      :fa_icon_class="'fas fa-fw fa-trophy'"
    />

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <sidebar-toggler />

  </ul>
  <!-- End of Sidebar -->

</template>
