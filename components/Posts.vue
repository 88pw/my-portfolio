<template>
  <section class="section-posts">
    <div class="section-posts__inner">
      <figure v-if="eyecatch" class="section-posts__figure">
        <img :src="eyecatch" :alt="title">
      </figure>
      <div class="section-posts__content">
        <h3 class="section-posts__title" v-text="title">
          Title
        </h3>
        <div v-if="description" class="section-posts__description" v-html="description" />
        <div class="section-posts__meta">
          <div v-if="categories && categories.length" class="section-posts__categories">
            <span v-for="(category,index) in categories" :key="index" class="section-posts__category" v-text="category" />
          </div>
          <div v-if="tags && tags.length" class="section-posts__tags">
            <span v-for="(tag,index) in tags" :key="index" class="section-posts__tag" v-text="tag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String
    },
    categories: {
      type: Array
    },
    tags: {
      type: Array
    },
    eyecatch: {
      type: String
    }
  }
}
</script>

<style>

</style>
