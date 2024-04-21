<template>
  <h1>Articles</h1>
  <Loader v-if="loader"/>
  <section class="cards">
    <div
      class="card"
      v-for="article in filteredArticles"
      :key="article.id"
      @mouseenter="hoveringCardIdx = article.id"
      @mouseleave="hoveringCardIdx = null"
      @click="cardClickHandler(article.id)"
    >
      <div class="card__image">
        <img :src="article.image" loading="lazy" alt="cardImage">
      </div>
      <div class="card__desc">
        {{ article.preview }}
      </div>
      <div class="card__button" v-if="hoveringCardIdx === article.id">
        Read more
      </div>
    </div>
  </section>
  <Paginate
    v-if="!loader"
    :totalItems="articles.length"
    :itemsPerPage="itemsPerPage"
    :cPage="currentPage"
    :maxPagesShown="5"
    @changePageIdx="changePageIdx"/>
</template>

<script lang="ts">
import { ComputedRef, Ref, computed, defineComponent, ref } from "vue";
import Paginate from "../components/UI/Paginate.vue";
import Loader from "../components/Loader.vue";
import axios from 'axios'
import { Articles, IArticle } from "../types/Article";
import { useRouter } from "vue-router";

interface State {
  articles: Ref<Articles>,
  itemsPerPage: Ref<number>,
  currentPage: Ref<number>,
  pageCount: ComputedRef,
  filteredArticles: ComputedRef,
  changePageIdx(idx: number): void,
  hoveringCardIdx: Ref<number | null>,
  cardClickHandler(idx: number): void,
  loader: Ref<boolean>
}

export default defineComponent({
  components: {
    Paginate,
    Loader
  },
  setup(): State {
    const articles = ref<Articles>([])
    const router = useRouter()
    const itemsPerPage = ref<number>(8) // кол-во карточек на странице
    const currentPage = ref<number>(1) // текущ. страница
    const hoveringCardIdx = ref<number | null>(null)
    const loader = ref<boolean>(true)
    
    const pageCount = computed(() => // всего сколько элементов у пагинатора
      Math.ceil(articles.value.length / itemsPerPage.value)
    )
    const filteredArticles = computed((): IArticle[] => 
      articles.value.slice(itemsPerPage.value * (currentPage.value - 1), itemsPerPage.value * currentPage.value)
    )
    const changePageIdx = (idx: number): void => {
      currentPage.value = idx
    }
    const getArticles = (): void => {
      loader.value = true
      axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
      .then(r => { articles.value = r.data.reverse(); loader.value = false })
      .catch(() => { router.push('/notFound') })
      
    }
    getArticles()
    const cardClickHandler = (id: number): void => {
      router.push(`/article/${id}`)
    }
    return{
      articles,
      itemsPerPage,
      currentPage,
      pageCount,
      filteredArticles,
      changePageIdx,
      hoveringCardIdx,
      cardClickHandler,
      loader
    }
  }

})
</script>

<style lang="scss">
.cards{
  width: 100%;
  display: flex;
  min-height: 600px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 44px;
}
.card{
  box-sizing: border-box;
  width: 280px;
  height: 380px;
  position: relative;
  text-align: left;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: translateY(-30px)
  }
  &__image{
    width: 100%;
    height: 280px;
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
  &__desc{
    font-size: 20px;
    margin: 24px 0 12px 0;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__button{
    color: rgba(226, 190, 255, 1);
    font-size: 20px;
  }
}
</style>