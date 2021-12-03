<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="grey lighten-4">
      <div class="mx-4 mb-4">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
