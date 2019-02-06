<template>
  <div class="dash-background">
    <div class="header">
      <SearchBox ref="searchbox" />
      <div class="github-area" @click="openGithub()">
        <div class="github-img" />
        <span>{{$site.themeConfig.repoLabel}}</span>
      </div>
    </div>
    <div class="omg-area">
      <div class="flex-container">
        <div class="omg-img" />
        <div class="microservice">
          Open<br /> Microservice<br /> Guide
        </div>
      </div>
      <div class="reusable-text">{{ $site.description }}</div>
      <button class="round-button" @click="getStarted()">
          Get Started →
      </button>
    </div>
    <div class="header-graphic" />
  </div>
</template>

<script>
import SearchBox from '@default-theme/SearchBox.vue'

export default {
  components: { SearchBox },
  mounted() {
    if (this.$refs.searchbox) {
      var search_input = this.$refs.searchbox.$el.children[0]
      search_input.setAttribute('placeholder', 'Search')
    }
  },  
  methods: {
    openGithub () {
      window.open('https://github.com/microservices/microservice.guide')
    },
    getStarted () {
      this.$router.push('/introduction/overview/')
    }
  }
}
</script>

<style lang="stylus">
@import "../config.styl"

.dash-background 
  position relative
  background-color $homeBg
  height 100vh
  min-height 40rem!important
  color white
  padding 3.5rem 4.5rem 0
  z-index 3
  &::before
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-image url('/grid.svg')
    background-size 4% auto
    background-position bottom center
    display block
    opacity 0.4
    z-index -1
  .header 
    margin-bottom 2rem
    z-index 3
    // padding 3.5rem 4.5rem 0 4.5rem
    // font-size 12px   
  .github-area 
    float:right
    display: flex
    font-size 1.1rem
    padding: 0.5rem 0
    opacity 0.8
    cursor pointer
    &:hover, &:active
      opacity 1
      border-bottom: 1px dashed #fff
    .github-img 
      width 1.5rem
      height $lnSize
      background-image url('/github_icon.svg')
      background-size cover
      margin-right 10px
  .omg-area 
    padding 12rem 14rem
    .omg-img 
      width 30rem
      height 10rem
      background-image url('/omg_logo.svg')
      background-size cover
      background-repeat no-repeat
  .forward-img 
    width 1rem
    height 0.8rem
    background-image url('/arrow_icon.svg')
    background-size cover
    margin-top 0.3rem
    margin-left 0.6rem
  .search-box
    z-index:100
    input
      width 20rem
      font-size $lnSize
      padding 0.5rem 0 0.5rem 3rem
      // line-height 2.4rem
      border-color #41434d
      color #fefefe
      background transparent url(/search_icon.svg) 1rem 0.9rem no-repeat !important    
      &:active, &:focus
        border-color #fefefe
  .header-graphic 
    position absolute
    right 0px
    top calc(100% - 21vw)
    width 38vw
    height 42vw
    background-image url('/header_graphic.svg')
    background-position center
    background-repeat no-repeat
    background-size cover
  .microservice 
    margin-left 1.8rem
    line-height: 3.2rem
    font-size 2.1rem
  .reusable-text 
    font-size 1.5rem
    margin-top 2rem
    margin-bottom 3rem
    font-weight 300

@media screen and (min-width: $SCHuge)
  .dash-background
    .omg-area
      .omg-img
        width 33rem
        height 11rem
    .microservice
      font-size 2.5rem  
      line-height: 3.8rem
    .reusable-text
      font-size 1.7rem
    .forward-img
      margin-top 0.4rem
  .round-button 
    font-size 1.4rem

@media (min-width: $SCSuperHuge)
  .dash-background
    .omg-area
      .omg-img
        width 36rem
        height 12rem
    .microservice
      font-size 2.8rem  
      line-height: 4.2rem
    .reusable-text
      font-size 2rem
    .forward-img
      margin-top 0.3rem
  .round-button 
    font-size 1.6rem

@media screen and (max-width: $SCLarge)
  .dash-background
    .omg-area
      padding 3rem
      .omg-img
        width 27rem
        height 8rem
        background-size contain
    .microservice
      font-size 1.8rem  
      line-height: 2.8rem
    .reusable-text
      font-size $lnSize
  .round-button
    font-size 1rem

@media screen and (max-width: $SCMobile)
  .dash-background
    padding 0
    .header
      padding: 1rem 0rem 0 0rem;
      align-items: center;
      display: flex;
      justify-content: space-around;
    .omg-area
      padding 4rem
      .flex-container
        flex-direction column!important
      .omg-img
        width 12rem
        height 5rem
        margin-bottom 1rem
        background-size 100% auto
    .microservice
      margin-left: 0rem
    .search-box input
      width 12rem
    .github-area span 
      display none
    .search-box
      .suggestions
        left 1rem!important
  .header-graphic 
    display none!important
  #ms-guide h1
    font-size 2.8rem
</style>
