<template>
  <li class="nav-item" v-if="submenu == undefined">
    <router-link :to="'/'+text" class="nav-link">
      <i :class="fa_icon_class"></i>
      <span>{{text}}</span>
    </router-link>
  </li>

  <li v-else class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" :data-target="'#collapse'+text.toLowerCase()"
      aria-expanded="true" :aria-controls="'collapse'+text.toLowerCase()">
      <i :class="fa_icon_class"></i>
      <span>{{ text }}</span>
    </a>
    <div :id="'collapse'+text.toLowerCase()" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">

        <div v-for="(submenu_d, submenu_name) in submenu" :key="submenu_name">
          <h6 class="collapse-header">{{ submenu_name }}</h6>

          <div v-for="(value, name) in submenu_d" :key="name">
            <!-- <a v-if="name == active" class="collapse-item active" :href="value">{{ name }}</a> -->
            <!-- <a v-else class="collapse-item" :href="value">{{ name }}</a> -->
            <router-link v-if="name == active" :to="value" class="collapse-item active" >{{ name }}</router-link>
            <router-link v-else :to="value" class="collapse-item" >{{ name }}</router-link>

          </div>
        </div>
      </div>
    </div>

  </li>
</template>

<script>
  export default {
    props: [
      'text',
      'href',
      'fa_icon_class',

      'submenu',
      'active'
      ]
  }
</script>

<style>

</style>