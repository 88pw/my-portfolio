<template>
  <section v-if="(filteredCategory == '' || filteredCategory == categories) && (filteredTag == '' || tagFilter.length)" class="section-posts container">
    <div class="section-posts__inner row align-items-center">
      <figure v-if="figure" class="section-posts__figure col-md-9 col-12">
        <img :src="figure" :alt="title">
      </figure>
      <div class="section-posts__content col-md-3 col-12">
        <span v-if="number" class="section-posts__number" v-text=" number < 10 ? '0'+number : number " />
        <h3 class="section-posts__title" v-text="title">
          Title
        </h3>
        <div v-if="description" class="section-posts__description" v-html="description" />
        <div class="section-posts__meta">
          <div v-if="categories && categories.length" class="section-posts__categories">
            <!-- <span v-for="(category,index) in categories" :key="index" class="section-posts__category" v-text="category.fields.title" /> -->
            <span class="section-posts__category" v-text="categories" />
          </div>
          <div v-if="tags && tags.length" class="section-posts__tags">
            <span v-for="(tag,index) in tags" :key="index" class="section-posts__tag" v-text="tag.fields.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      require: true,
      default: ''
    },
    description: {
      type: [String, Array],
      default: ''
    },
    categories: {
      type: [String, Object, Array],
      default: () => ({ count: 0 })
    },
    tags: {
      type: [Object, Array],
      default: () => ({ count: 0 })
    },
    figure: {
      type: String,
      default: ''
    },
    filteredCategory: {
      type: String,
      default: ''
    },
    filteredTag: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagFilter() {
      return this.$props.tags.filter((x) => {
        return x.fields.title === this.$props.filteredTag
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-posts{
    &__content{
      text-align: left;
      padding-left: 2.5em;
    }
    &__number{
      display: block;
      font-size: 200%;
      font-weight: bold;
      margin-bottom: 1em;
    }
    &__title{
      font-size: 120%;
    }
    &__figure{
      padding-left: 0px;
      padding-right: 0px;
      box-shadow: 0px 0px 5px $color-border;
    }
    &__description{
      font-size: 80%;
    }
    &__meta{
      font-size: 70%;
    }
    &__category,&__tag{
      background-color: $color-text;
      color: white;
      display: inline-block;
      padding: .2em 1em;
      margin-right: .5em;
      margin-bottom: .5em;
      &:last-child{
        margin-right: 0em;
      }
    }
    &__tag{
      background-color: lighten($color-text, 15%);
    }
  }
</style>
