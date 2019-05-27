<template>
  <div class="nav">
    <div class="nav__icon" :class="nav ? 'nav__icon_on' : 'nav__icon_off'" @click="navFunc()">
      <span class="nav__icon_line" />
      <span class="nav__icon_line" />
    </div>
    <div class="nav__wrap" :class="{ 'nav__wrap_on' : nav }">
      <div class="nav__inner">
        <nav class="header-nav">
          <span class="header-nav__title">Categories</span>
          <ul class="header-nav__categories">
            <li @click="postCategory('')">
              ALL
            </li>
            <li
              v-for="(category,index) in categories"
              :key="index"
              @click="postCategory(category.fields.title)"
              v-text="category.fields.title"
            />
          </ul>
        </nav>
        <nav class="header-nav">
          <span class="header-nav__title">Tags</span>
          <ul class="header-nav__tags">
            <li @click="postTag('')">
              ALL
            </li>
            <li
              v-for="(tag,index) in tags"
              :key="index"
              @click="postTag(tag.fields.title)"
              v-text="tag.fields.title"
            />
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: [String, Object, Array],
      default: () => ({ count: 0 })
    },
    tags: {
      type: [Object, Array],
      default: () => ({ count: 0 })
    }
  },
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
    },
    postCategory(val) {
      this.$parent.category = val
      this.nav = false
    },
    postTag(val) {
      this.$parent.tag = val
      this.nav = false
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
    &__title{
      font-size: 200%;
      font-weight: bold;
    }
    ul{

    }
    li{
      background-color: $color-text;
      color: white;
      display: inline-block;
      padding: .2em 1em;
      margin-right: .5em;
      margin-bottom: .5em;
      font-size: 70%;
      &:last-child{
        margin-right: 0em;
      }
    }
    &__categories,&__tags{
      li{
        cursor: pointer;
      }
    }
  }
</style>
