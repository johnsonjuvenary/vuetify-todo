<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        color="grey"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Juve</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- the menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon> Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app bottom v-model="drawer" color="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/joh.jpg" alt="" />
          </v-avatar>
          <p class="white--text subheader mt-3">Johnson Juvenary</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group>
          <v-list-item
            e
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon" class="white--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="link.text"
                class="white--text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

