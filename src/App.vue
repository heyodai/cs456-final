<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app v-model="show_drawer" clipped>
      <v-list dense nav>
        <v-list-item v-for="item in items_first" :key="item.title" link :to="item.href">
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-subheader>Projects</v-subheader>

        <v-list-item v-for="item in items_second" :key="item.title" link :to="item.href">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dense dark app clipped-left>
      <v-app-bar-nav-icon @click="(show_drawer = !show_drawer)"></v-app-bar-nav-icon>

      <v-toolbar-title>Best Todo List Ever</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => { }">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-row>
          <v-col lg="6" class="mx-auto">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data() {
    return {
      items_first: [
        { title: 'Inbox', icon: 'mdi-inbox', color: "green", href: '/' },
        { title: 'Scheduled', icon: 'mdi-clock-outline', color: "orange", href: 'scheduled' },
        { title: 'Flagged', icon: 'mdi-flag', color: "red", href: 'flagged' },
        // { title: 'Due Today', icon: 'mdi-calendar-today', color: "blue" },
      ],
      items_second: [
        { title: 'Groceries', icon: 'mdi-cart-variant', href: 'groceries' },
        { title: 'Reminders', icon: 'mdi-bell-ring', href: 'reminders' },
        { title: 'Kitchen Remodel', icon: 'mdi-briefcase', href: 'kitchen' },
        { title: 'Vacation', icon: 'mdi-airplane', href: 'vacation' },
      ],
      right: null,
      show_drawer: true,
    }
  },
});
</script>
