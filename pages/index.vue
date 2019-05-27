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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title{
    background: $test;
    color: $test;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
