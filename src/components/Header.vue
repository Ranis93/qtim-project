<template>
  <header class="header">
    <div class="header__content">
        <router-link :to="'/'"><img :src="logo" /></router-link>
        <div class="header__control">
            <nav>
                <router-link :to="'/works'">Works</router-link>
                <router-link :to="'about'">About</router-link>
            </nav>
            <div class="buttonGroup">
                <div class="buttonGroup__button">
                    <button class="langBtn">
                        <img :src="uk" alt="langButton"/>
                    </button>
                </div>
                <div class="buttonGroup__button">
                    <button class="workBtn">Let’s work</button>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '../assets/icons/logo.svg'
import uk from '../assets/icons/uk.svg'
export default defineComponent({
    components: {
    },
    setup(){
        return { logo, uk }
    }
})
</script>

<style lang="scss" scoped>
.header{
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 121px;
  overflow: hidden;
  &__content{
    width: 100vw;
    max-width: 1440px;
    box-sizing: border-box;
    padding: 0 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__control{
    display: flex;
    align-items: center;
  }
}
.buttonGroup{
    margin-left: 91px;
    display: flex;
    align-items: center;
    column-gap: 16px;
}
.langBtn{
    padding: 14px;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    position: relative;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.workBtn{
    padding: 16px 32px;
    border-radius: 999px;
}
nav{
    a:last-child{
        margin-left: 58px;
    }
}
</style>