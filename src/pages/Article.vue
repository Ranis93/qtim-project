<template>
  <Loader v-if="loader"/>
  <section class="article" v-if="article">
    <h1>{{ article.title }}</h1>
    <div class="article__image">
      <img :src="article.image" loading="lazy" alt="cardImage">
    </div>
    <div class="article__text">About</div>
    <h4 class="article__desc">
      {{ article.description }}
    </h4>
  </section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from 'vue';
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';
import { IArticle } from '../types/Article';
import Loader from "../components/Loader.vue";

interface State {
  article: Ref<IArticle | null>,
  loader: Ref<boolean>,
}

export default defineComponent({
  components: {
    Loader
  },
  setup(): State {
    const article = ref<IArticle | null>(null)
    const route = useRoute()
    const router = useRouter()
    const loader = ref<boolean>(true)
    const getArticle = (): void => {
      loader.value = true
      axios.get(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id || 1}`)
      .then(r => { article.value = r.data; loader.value = false })
      .catch(() => { router.push('/notFound') })
    }
    getArticle()
    return{
      article,
      loader
    }
  }
})
</script>

<style lang="scss" scoped>
h1{
  margin: 240px 0 73px 0;
}
.article{
  &__image{
    width: 100%;
    height: 700px;
    margin-bottom: 80px;
    background-image: url('/src/assets/img/picture0.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }
    img[alt]:after {  
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 1);
      font-family: 'Helvetica';
      font-weight: 300;
      line-height: 2;  
      text-align: center;
      content: '';
    }
  }
  &__text{
    text-align: left;
    font-size: 16px;
    font-weight: 16px;
    margin-bottom: 32px;
  }
  &__desc{
    text-align: left;
    font-size: 36px;
    line-height: 44.64px;
    max-width: 695px;
    margin-bottom: 80px;
  }
}
</style>