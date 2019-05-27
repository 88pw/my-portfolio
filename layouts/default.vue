<template>
  <div>
    <header class="header">
      <h1 class="header__h1">
        Marnie.Web
      </h1>
      <div class="header__description">
        <p>marnie.web</p>
        <p>It is Portfolio of Masahiro Mitsukuni.</p>
        <small>2019 © Masahiro Mitsukuni</small>
      </div>
    </header>
    <nuxt class="page" />
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.header{
  position: fixed;
  left: 0px;
  top: 0px;
  &__h1{
    font-size: 1000%;
    line-height: 0;
    margin-bottom: .5em;
    color: lighten($color-text, 20%);
  }
  &__description{
    font-size: 80%;
    padding-left: 1em;
    color: lighten($color-text, 15%);
  }
  small{
    color: lighten($color-text, 15%);
  }
}
</style>
