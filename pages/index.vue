<template>
  <section class="container">
    <div>
      <Posts
        key="1"
        title="ito"
        description="descriptions"
        categories="1,2"
        tags="3,4"
      />
    </div>
  </section>
</template>

<script>
import Posts from '~/components/Posts.vue'
import jsonData from '~/assets/json/posts.json'

export default {
  components: {
    Posts
  },
  async asyncData({ app }) {
    const datas = await app.$axios.$get(jsonData)
    console.log(await datas)
    return { datas }
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
