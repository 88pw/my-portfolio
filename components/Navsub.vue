<template>
  <div class="nav">
    <div class="nav__icon" :class="nav ? 'nav__icon_on' : 'nav__icon_off'" @click="navFunc()">
      <span class="nav__icon_line" />
      <span class="nav__icon_line" />
    </div>
    <div class="nav__wrap" :class="{ 'nav__wrap_on' : nav }">
      <div class="nav__inner">
        <nav class="header-nav">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false
    }
  },
  methods: {
    navFunc() {
      if (this.nav === false) {
        this.nav = true
      } else {
        this.nav = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    &__wrap{
      width: 86%;
      height: 100%;
      z-index: 9999;
      position: fixed;
      top: 0px;
      right: -100%;
      opacity: 0;
      background-color: $color-background;
      padding: 1em;
      box-shadow: 0px 0px 10px rgba($color-text, .3);
      &_on{
        right: 0%;
        opacity: 1;
      }
    }
    &__inner{
      height: 100%;
    }
    &__icon{
      position: fixed;
      z-index: 10000;
      left: 6%;
      top: 50%;
      padding-top: 5px;
      padding-bottom: 5px;
      cursor: pointer;
      &_line{
        width: 25px;
        height: 2px;
        background-color: $color-text;
        display: block;
        &:first-child{
          margin-bottom: 7px;
        }
      }
      &_off:hover{
        .nav__icon_line{
          &:first-child{
            transform: rotate(20deg);
          }
          &:last-child{
            transform: rotate(-20deg);
          }
        }
      }
      &_on{
        .nav__icon_line:first-child{
          margin-bottom: 0px;
        }
      }
      &_on:hover{
        .nav__icon_line{
          &:first-child{
            transform: rotate(45deg);
          }
          &:last-child{
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .header-nav{
    width: 100%;
    ul{
      list-style-type: none;
      margin-left: 0px;
      padding-left: 0px;
    }
    li{
      padding: .2em 1em;
      margin-bottom: .5em;
      font-size: 200%;
      font-weight: bold;
      margin-left: 0px;
      padding-left: 0px;
      a{
        color: $color-text;
      }
    }
  }
</style>
