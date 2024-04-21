<template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="totalItems"
      v-model="currentPage"
      :onClick="changePageIdx"
      :items-per-page="itemsPerPage"
      :max-pages-shown="maxPagesShown"
      :show-breakpoint-buttons="false"
      prev-button-content="<"
      next-button-content=">"
      :hidePrevNextWhenEnds="true"
    >
    </vue-awesome-paginate>
  </div>
</template>
<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

interface State {
  currentPage: Ref<number>,
  changePageIdx(idx: number): void,
}

export default defineComponent({
  props:{
    totalItems:{
      type: Number,
      required: true
    },
    cPage: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    maxPagesShown: {
      type: Number,
      required: true
    },
  },
  emits: {
    changePageIdx: (idx: number) => Number.isInteger(idx)
  },
  setup(props, { emit }): State {
    const currentPage = ref<number>(props.cPage);
    const changePageIdx = (idx: number): void => {
      emit('changePageIdx', idx)
    }
    return{
      currentPage,
      changePageIdx
    }
  }

})
</script>
<style lang="scss">
.pagination{
  text-align: left;
    &-container {
    column-gap: 10px;
    align-items: center;
    margin: 50px 0 140px;
  }
}

.pagination .paginate-buttons {
  height: 44px;
  width: 44px;
  cursor: pointer;
  border-radius: 12px;
  background-color: transparent;
  background-color: rgba(243, 243, 243, 1);
  border: none;
  color: black;
  box-shadow: none;
}

.pagination .back-button,
.pagination .next-button {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(232, 232, 232, 1);
  color: rgba(73, 73, 73, 1);
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.pagination .active-page {
  background-color: rgba(16, 16, 16, 1);
  color: rgba(255, 255, 255, 1);
}

.pagination .paginate-buttons:hover {
  background-color: rgba(232, 232, 232, 1);
  color: rgba(16, 16, 16, 1);
}

.pagination .active-page:hover {
  background-color: rgba(232, 232, 232, 1);
  color: rgba(16, 16, 16, 1);
}


.pagination .back-button:hover,
.pagination .next-button:hover {
  background-color: rgba(232, 232, 232, 1);
  color: rgba(73, 73, 73, 1);
}

.pagination .back-button:active,
.pagination .next-button:active {
  background-color: rgb(85, 85, 85);
}
</style>
