<template>
  <div >
    <h1>豆瓣排行榜</h1>
    <ul>
      <li v-for="article in articles">
        {{article}}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default { //这里需要将模块引出，可在其他地方使用
    name: "doubanVue",
    data (){ //注意：data即使不需要传数据，也必须return,否则会报错
      return {
        articles: ["longzhenghudou","dangxinfulaiqiaomen"]
      }
    }
    /*
    mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }*/
}
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>
