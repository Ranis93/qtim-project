<template>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Paginate from "./components/UI/Paginate.vue";


export default defineComponent({
  components: {
    Header,
    Paginate,
    Footer
  },
  setup() {
    return{
    }
  }
})
</script>
