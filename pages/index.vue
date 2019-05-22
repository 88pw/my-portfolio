<template>
  <section class="container">
    <div>
      <Posts
        v-for="(post,index) in posts"
        :key="index"
        :title="post.fields.title"
        :figure="post.fields.figure.fields.file.url"
        :categories="post.fields.categories.fields.title"
        :tags="post.fields.tags"
      />
    </div>
  </section>
</template>

<script>
import Posts from '~/components/Posts.vue'
import contentful from '~/plugins/contentful'

export default {
  components: {
    Posts
  },
  asyncData({ params }) {
    return contentful
      .getEntries({
        content_type: 'data',
        order: '-sys.createdAt'
      })
      .then((entries) => {
        return {
          posts: entries.items
        }
      })
      .catch((e) => {
        console.log(e)
      })
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
