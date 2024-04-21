<template>
  <footer class="footer">
    <div class="footer__content">
        <div class="footer__subtitle">
            Is there a project?
        </div>
        <div class="footer__main">
            <div class="footer__title">
                <span>Let’s work to</span>g<span>ether</span>
            </div>
            <div class="footer__info">
                <div class="footer__infobox">
                    <div class="footer__text">
                        For all questions
                    </div>
                    <div class="footer__tel">
                        <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                    </div>
                    <div class="footer__mail">
                        <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                    </div>
                </div>
                <div class="footer__infobox">
                    <div class="footer__text">
                        Office in Russia
                    </div>
                    <div class="footer__address">
                        139 Ruben Station Lake Drew, NM 52678
                    </div>
                    <div class="footer__ico">
                        <a href="tg://resolve?domain=Ranis_Northman">
                            <img :src="telegIco" />
                        </a>
                    </div>
                </div>
                <div class="footer__infobox">
                    <div class="footer__text">
                        Office in Dubai
                    </div>
                    <div class="footer__address">
                        139 Ruben Station Lake Drew, NM 52678
                    </div>
                    <div class="footer__ico">
                        <a href="tg://resolve?domain=Ranis_Northman">
                            <img :src="telegIco" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__nav">
            <nav class="footerNav">
                <div class="footerNav__leftBox">
                    <div class="footerNav__item">
                        <a href="http://www.facebook.com/">Facebook</a>
                    </div>
                    <div class="footerNav__item">
                        <a href="https://instagram.com/">Instagram</a>
                    </div>
                    <div class="footerNav__item">
                        <a href="tg://resolve?domain=Ranis_Northman">Telegram</a>
                    </div>
                </div>
                <div class="footerNav__centerBox">
                    <div class="footerNav__text">
                        Go
                    </div>
                </div>
                <div class="footerNav__rightBox">
                    <div class="footerNav__item">
                        <a href="https://www.behance.net/">Behance</a>
                    </div>
                    <div class="footerNav__item">
                        <a href="https://linkedin.com">Linkedn</a>
                    </div>
                    <div class="footerNav__item">
                        <a href="https://www.google.ru/">Privacy Policy</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import telegIco from '../assets/icons/teleg.svg'
export default defineComponent({
    components: {
    },
    setup(){
        return { telegIco }
    }
})
</script>

<style lang="scss" scoped>
@mixin footerFlex{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.footer{
    background-color: rgba(226, 190, 255, 1);
    width: 100%;
    text-align: left;
    &__content{
        max-width: 1440px;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 140px 112px 0 112px;
    }
    &__subtitle, &__text, &__tel, &__mail, &__address{
        font-size: 16px;
        line-height: 19.2px;
    }
    &__text{
        margin-bottom: 12px;
    }
    &__tel{
        margin-bottom: 4px;
    }
    &__address{
        margin-bottom: 8px;
    }
    &__ico{
        width: 32px;
        height: 32px;
    }
    &__main{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &__info{
        margin-right: 233px;
    }
    &__infobox{
        margin-bottom: 36px;
        max-width: 152px;
    }
    &__title{
        font-size: 112px;
        line-height: 112px;
        max-width: 464px;
        margin-top: 56px;
        span{
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 15px;
        text-decoration-skip-ink: auto;
        }
    }
}
.footerNav{
    $radius: 179;
    @include footerFlex;
    
    &__leftBox, &__rightBox{
        @include footerFlex;
        column-gap: 32px;
        margin-bottom: 30px;
    }
    &__centerBox{
        font-size: 32px;
        line-height: 32px;
        color: rgba(243, 243, 243, 1);
        background-color: rgba(16, 16, 16, 1);
        border-radius: $radius + px $radius + px 0 0;
        width: 2 * $radius + px;
        height: $radius + px;
        position: relative;
    }
    &__text{
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>