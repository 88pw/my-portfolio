<template>
  <div class="content">
    <Nav :categories="categories" :tags="tags" />
    <article>
      <Posts
        v-for="(post,index) in posts"
        :key="index"
        :title="post.fields.title"
        :figure="post.fields.figure.fields.file.url"
        :categories="post.fields.categories.fields.title"
        :tags="post.fields.tags"
        :description="$md.render(post.fields.body)"
        :link="post.fields.link"
        :number="index+1"
        :filteredCategory="category"
        :filteredTag="tag"
      />
    </article>
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'
import Nav from '~/components/Nav.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Posts,
    Nav
  },
  data() {
    return {
      category: '',
      tag: ''
    }
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'data',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'category',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'tag',
        order: '-sys.createdAt'
      })
    ]).then(([datas, categories, tags]) => {
      return {
        posts: datas.items,
        categories: categories.items,
        tags: tags.items
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss" scoped>

</style>
