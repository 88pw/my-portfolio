<template>
  <div class="content">
    <Navsub />
    <article class="about">
      <section class="section-posts container">
        <div class="section-posts__inner row align-items-center">
          <figure class="section-posts__figure col-md-7 col-12">
            <img src="~/assets/images/about-main.jpg" alt="title">
          </figure>
          <div class="section-posts__content col-md-5 col-12">
            <h3 class="section-posts__title">
              Masahiro Mitsukuni
            </h3>
            <div class="section-posts__description">
              <p>約10年WEB業界に勤務</p>
              <p>ディレクター・デザイナー・イラストレーター・カメラマン兼任経験あり</p>
              <p>やりたくない業務でも引き受けてきたため、通常のフリーランスよりはできることの枠が広く、オールラウンダーとして扱われることがしばしば</p>
              <p>現在は零細企業のWEB業務をこなす傍ら、フリーランスとしても活動</p>
              <p>Wordpressの使用歴が長く、現在は WP REST API + Vuejs でのコーディングが得意</p>
              <p>環境は gulp / webpack / es をベースにコーディングを行っている</p>
              <p>デザイン関連は、LPなどキャッチーなビジュアルを必要とするものはPhotoshop、それ以外は、もっぱらXDを使用</p>
              <p>illustrator / Photoshop の経験が長く、jQueryもよく使用していたため、古い構築環境にも対応可能（FireWorksは使用しない）</p>
              <p>ブラウザーサポートは、latestのみを意識し、babel・auto-prifixer対応外は基本的には非対応</p>
              <p>サーバー構築は対応外だが、XserverやLolipop、mixhost、FastServerなど、共有サーバーの使用経験は豊富</p>
            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="row">
          <header class="col-12">
            <h2>skillSheet</h2>
          </header>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-html.png" alt="html5">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>bem形式での記述がベース</p>
                  <p>canvasなど、通常あまり使用しないであろうタグ以外は基本書いたことがある</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-css.png" alt="css3">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>bootstrap4のgrid周りだけを使用することが多い</p>
                  <p>cssは滅多に使用せず、基本scssを使用</p>
                  <p>ブラウザーサポートは、latestのみを意識し、auto-prifixer対応外は基本的には非対応</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-js.png" alt="js / es">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>主にvueで必要になった場合に使用することがほとんどです</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-vue.png" alt="vue">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>computed / watch ぐらいまでの理解はあります</p>
                  <p>WPとの連携では、async / await でページネーション付きで全件取得できるぐらいまでの技量はあります</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-jquery.png" alt="jquery">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>スクラッチでスライダーを組めるぐらいの技量はあります</p>
                  <p>最近あまり使用しません</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-wp.png" alt="wordpress">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>オリジナルテーマから既成テーマの子テーマカスタマイズまで対応可能</p>
                  <p>WP REST API を使用したhtmlへのデータの呼び出しから、通常のWPタグを用いた呼び出しまで幅広く対応</p>
                  <p>販売しない程度のプラグインなら作成可能</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-php.png" alt="php">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>スクラッチでのアプリケーション作成経験有</p>
                  <p>既存アプリケーションのカスタマイズ経験有</p>
                  <p>composerの使用経験は少</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-ruby.png" alt="ruby">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>mechanize / nokogiri によるクロール→ローカルデータ保存（csv）の経験有</p>
                  <p>データ収集以外ではすることのない言語</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-excel.png" alt="excel">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>必要とされる機会は少ないが、得意な方</p>
                  <p>通常のexcel関数は問題なく使用可能</p>
                  <p>CSVからのデータ抽出→解析結果出力をVBAで組んだ経験有</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-illustrator.png" alt="illustrator">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>IL9～の使用者</p>
                  <p>最新を除く大方の機能は問題なく使用可能</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-photoshop.png" alt="photoshop">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>写真加工から切り抜き、サイトデザイン作成まで大半の機能を使用可能</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-xd.png" alt="xd">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>使用歴1年</p>
                  <p>開発もする立場なので、開発者共有も問題なし</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-indesign.png" alt="indesign">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>パンフレットは主にindesginを使用</p>
                  <p>あまり触ることはない</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-list-image col-sm-6 col-12">
            <div class="section-list-image__inner row align-items-center">
              <figure class="section-list-image col-sm-2 col-3">
                <img src="~/assets/images/skill-aftereffects.png" alt="aftereffects">
              </figure>
              <div class="col-sm-10 col-9">
                <div class="section-list-image__content">
                  <p>結婚式ムービーや、店舗紹介ムービーを作成したことがある程度</p>
                  <p>Premierとの連携も行っていた</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import Navsub from '~/components/Navsub.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Navsub
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
        'content_type': 'category',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'tag',
        order: '-sys.createdAt'
      })
    ]).then(([categories, tags]) => {
      return {
        categories: categories.items,
        tags: tags.items
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss" scoped>
  header{
    padding: 3em .5em;
    text-align: left;
  }
  .section-list-image{
    &__content{
      font-size: 70%;
      text-align: left;
      p{
        margin-bottom: .5em;
      }
    }
    &__stars{
      font-size: 150%;
      text-align: left;
    }
  }
  .section-posts{
    &__content{
      text-align: left;
      padding-left: 2.5em;
    }
    &__title{
      font-size: 120%;
      margin-bottom: 2em;
    }
    &__figure{
      padding-left: 0px;
      padding-right: 0px;
      box-shadow: 0px 0px 5px $color-border;
    }
    &__description{
      font-size: 80%;
      p{
        margin-bottom: 1em;
      }
    }
  }

  header{
    width: 100%;
  }
</style>
