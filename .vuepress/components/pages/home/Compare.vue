<template>
  <div class="compare">
    <h2 class="title-desktop">Compare Spec</h2>
    <div class="table">
      <div class="header">
        <div class="heading spacer" />
        <div class="heading" v-for="c of colData" :class="{'main': c.main}">
          <div class="card">
            {{ c.heading }}
          </div>
        </div>
      </div>
      <div class="divider-h" />
      <div class="rows">
        <div class="row" v-for="(n, idx) in rowNames">
          <div class="name">{{ n }}</div>
          <div class="content" v-for="(c, idx2) in colData" :class="{
            'main': c.main,
            'slogan': n === 'Slogan',
            'website': n === 'Website',
            'border-l': idx2 === 0,
            'border-b': n === 'Designed for',
            'mini-border-b': n === 'Protocol' && n === 'Subscriptions' && s === 'Query / Mutations'
          }">
            <div class="card">
              <template v-if="c.cols[idx] === 0">
                <div class="bar"></div>
              </template>
              <template v-else-if="c.cols[idx] === 1">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.2805 0.183831C25.0545 -0.476327 23.687 0.796834 22.8854 1.5513C21.0465 3.34316 19.4904 5.41794 17.7456 7.30411C15.8123 9.37889 14.0204 11.4537 12.04 13.4814C10.9083 14.6131 9.68225 15.8391 8.92778 17.2537C7.23024 15.6032 5.76846 13.8114 3.88229 12.3497C2.51482 11.3123 0.251423 10.5578 0.298577 13.057C0.392885 16.3107 3.26929 19.8001 5.39122 22.0163C6.28715 22.9594 7.46601 23.9496 8.83348 23.9967C10.4839 24.0911 12.1814 22.1106 13.1717 21.026C14.9164 19.1399 16.3311 17.0179 17.9342 15.0846C20.009 12.5383 22.1309 10.039 24.1586 7.44557C25.4317 5.84233 29.4398 1.8813 26.2805 0.183831ZM2.37328 12.8684C2.32613 12.8684 2.27897 12.8684 2.18467 12.9154C1.99605 12.8684 1.85459 12.8211 1.66597 12.7268C1.80743 12.6325 2.0432 12.6797 2.37328 12.8684Z" fill="#29B997"/>
                </svg>
              </template>
              <template v-else-if="c.cols[idx] === -1">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.162861 12.9093C-0.163259 13.4726 -0.0446701 14.3176 0.93369 15.2366C1.83793 16.0667 2.78665 16.3929 3.33512 16.0519C4.32831 15.4145 5.10449 14.5723 5.90496 13.7273C6.6165 12.9862 7.9601 11.6439 8.59752 10.8434C10.0651 12.9928 10.3162 12.7307 11.9319 14.7318C12.0209 14.8504 13.3577 16.4816 14.3622 17C14.97 16.5998 16.447 15.7703 16.5656 15.2366C16.9807 13.4874 15.4609 12.3905 14.7642 11.4418C13.9637 10.3596 13.2077 9.24787 12.3775 8.19539C13.9733 6.50145 14.7186 5.65897 16.112 4.03875C16.112 4.03875 17.4729 2.68388 17.1489 2.19183C16.7486 1.58406 15.5439 0.33383 15.0102 0.215241C13.2611 -0.199821 12.8807 1.2359 11.9319 1.93261C10.8626 2.9047 9.64999 4.90454 8.59752 5.73466C7.20409 4.0003 5.35411 1.93261 3.53954 0.516695C2.97624 0.190575 2.29747 -0.461622 1.3784 0.516739C0.548276 1.42098 0.222155 2.36969 0.563099 2.91817C1.20052 3.91135 1.94932 4.502 2.79426 5.30247C3.53545 6.01401 4.20972 7.08361 5.02502 7.73585C4.8916 7.8248 4.75819 7.92856 4.62478 8.03233C3.05349 9.87137 1.69256 11.0055 0.162861 12.9093Z" fill="#C94444"/>
                </svg>
              </template>
              <template v-else-if="n === 'Website'">
                <a :href="`//${c.cols[idx]}`">{{ c.cols[idx] }}</a>
              </template>
              <template v-else>
                {{ c.cols[idx] }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE -->
    <h4 class="title-mobile">Compare Spec</h4>
    <div class="table-mobile">
      <div class="selectors">
        <div class="selector" v-for="(l, idx) in logos" :class="{'active': selected === l.name}" @click="selected = l.name">
          <img :src="`assets/img/${l.src}`" :alt="`${l.name} logo`">
        </div>
      </div>
      <div class="content">
        <div class="header">{{ selected }}</div>
        <div class="rows">
          <div class="row" v-for="(r, idx) in rowNames">
            <div class="name">{{ r }}</div>
            <div class="value" :class="{'website': r === 'Website'}">
                <template v-if="current.cols[idx] === 0">
                <div class="bar"></div>
              </template>
              <template v-else-if="current.cols[idx] === 1">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.2805 0.183831C25.0545 -0.476327 23.687 0.796834 22.8854 1.5513C21.0465 3.34316 19.4904 5.41794 17.7456 7.30411C15.8123 9.37889 14.0204 11.4537 12.04 13.4814C10.9083 14.6131 9.68225 15.8391 8.92778 17.2537C7.23024 15.6032 5.76846 13.8114 3.88229 12.3497C2.51482 11.3123 0.251423 10.5578 0.298577 13.057C0.392885 16.3107 3.26929 19.8001 5.39122 22.0163C6.28715 22.9594 7.46601 23.9496 8.83348 23.9967C10.4839 24.0911 12.1814 22.1106 13.1717 21.026C14.9164 19.1399 16.3311 17.0179 17.9342 15.0846C20.009 12.5383 22.1309 10.039 24.1586 7.44557C25.4317 5.84233 29.4398 1.8813 26.2805 0.183831ZM2.37328 12.8684C2.32613 12.8684 2.27897 12.8684 2.18467 12.9154C1.99605 12.8684 1.85459 12.8211 1.66597 12.7268C1.80743 12.6325 2.0432 12.6797 2.37328 12.8684Z" fill="#29B997"/>
                </svg>
              </template>
              <template v-else-if="current.cols[idx] === -1">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.162861 12.9093C-0.163259 13.4726 -0.0446701 14.3176 0.93369 15.2366C1.83793 16.0667 2.78665 16.3929 3.33512 16.0519C4.32831 15.4145 5.10449 14.5723 5.90496 13.7273C6.6165 12.9862 7.9601 11.6439 8.59752 10.8434C10.0651 12.9928 10.3162 12.7307 11.9319 14.7318C12.0209 14.8504 13.3577 16.4816 14.3622 17C14.97 16.5998 16.447 15.7703 16.5656 15.2366C16.9807 13.4874 15.4609 12.3905 14.7642 11.4418C13.9637 10.3596 13.2077 9.24787 12.3775 8.19539C13.9733 6.50145 14.7186 5.65897 16.112 4.03875C16.112 4.03875 17.4729 2.68388 17.1489 2.19183C16.7486 1.58406 15.5439 0.33383 15.0102 0.215241C13.2611 -0.199821 12.8807 1.2359 11.9319 1.93261C10.8626 2.9047 9.64999 4.90454 8.59752 5.73466C7.20409 4.0003 5.35411 1.93261 3.53954 0.516695C2.97624 0.190575 2.29747 -0.461622 1.3784 0.516739C0.548276 1.42098 0.222155 2.36969 0.563099 2.91817C1.20052 3.91135 1.94932 4.502 2.79426 5.30247C3.53545 6.01401 4.20972 7.08361 5.02502 7.73585C4.8916 7.8248 4.75819 7.92856 4.62478 8.03233C3.05349 9.87137 1.69256 11.0055 0.162861 12.9093Z" fill="#C94444"/>
                </svg>
              </template>
              <template v-else-if="r === 'Website'">
                <a :href="`//${current.cols[idx]}`">{{ current.cols[idx] }}</a>
              </template>
              <template v-else>
                {{ current.cols[idx] }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.compare
  display flex
  flex-direction column
  align-items center
  margin 0 .5rem 5rem
  @media (min-width: $MQNarrow + 1px)
    margin 0 2rem 5rem
  .divider-h
  .divider-v
    background #C5DCFC
  .divider-h
    height 1px
    width 100%
  .divider-v
    height 100%
    width 1px  
  .title-desktop
    display none 
    @media (min-width: $MQNarrow + 1px)
      margin 5rem 0 4rem 0
      display block
  .title-mobile
    display none
    @media (max-width: $MQNarrow)
      margin 5rem 0 2rem 0
      display block
  .table
    background $borderColor
    border-radius 10px
    display none
    flex-direction column
    @media (min-width: $MQNarrow + 1px)
      display flex
    .header
      display flex
      align-items center
      justify-content space-between
      .heading 
        letter-spacing 1px
        text-transform uppercase
        color $secondaryColor 
        font-family 'DM Bold Sans'
        flex-basis 20%
        text-align center
        .card
          border-radius 5px 5px 0 0
          padding 1.25rem 1rem 1rem
          margin-top .75rem
        .card:first-child
          margin-left .75rem
        .card:last-child
          margin-right .75rem
        &.main
          .card
            color: $primaryColor
            background white
    .rows
      display flex 
      flex-direction column
      .row
        display flex
        .name
          font-family DM Sans 
          font-size 1rem
          color #5675a0
          padding-left 2.75rem
          min-width calc(20% - 2.75rem)
          align-items center
          display flex
        .content
          flex-basis 20%
          text-align center
          font-family DM Sans
          font-size 1.125rem
          color black
          &.border-l
            border-left 1px solid #C5DCFC
          &.border-b
            border-bottom 1px solid #C5DCFC
          &.slogan
            .card
              height 60%
          .card
            padding 1.75rem 1rem 1.125rem
            display flex
            justify-content center
            align-items center
            .bar
              margin 10px 0
              width 21px
              height 4px
              background #C3CFDF
              border-radius 12px
          .card:first-child
            margin-left .75rem
          .card:last-child
            margin-right .75rem
          &.main:not(.website)
            .card
              background white
          &.website
            .card
              background #c5dcfc
              border-radius 5px
              width fit-content
              margin 2rem auto
              padding .25rem .75rem
              a
                font-family DM Sans
                font-weight normal
                font-size 1rem
                display flex
                align-items center
                text-align center
                color $secondaryColor
        &:nth-child(5)
          .content.main
            .card
              border-radius 0 0 5px 5px
              box-shadow 0px 5px 10px #DDE7EA
  .table-mobile
    display none 
    @media (max-width: $MQNarrow)
      display block
      width 100%
    .selectors
      display flex
      justify-content space-between
      width 100%
      .selector
        border-radius 50%
        border 1.2px solid #E1EAFF
        display flex
        justify-content center
        align-items center
        padding 1rem
        cursor pointer
        &:hover
          border 1.2px solid #477BF3
        &.active
          border 1.2px solid #477BF3
          box-shadow 0px 2.4px 24px rgba(5, 11, 55, 0.07)
        img 
          width 1.5rem
          height 1.5rem
    .content
      margin-top 1rem
      background $borderColor
      border-radius 10px
      display flex
      flex-direction column
      .header
        letter-spacing 1px
        text-transform uppercase
        color $secondaryColor 
        font-family 'DM Bold Sans'
        text-align center
        padding 1.5rem 0 1rem
        border-bottom 1px solid #C5DCFC
      .rows
        display flex 
        flex-direction column
        .row
          display flex
          justify-content space-between
          align-items center
          padding 1rem 0
          .name
            flex-basis 35%
            padding-left 1rem
            font-family DM Sans
            font-size .875rem
            color #5675A0
          .value
            flex-basis 65%
            font-family DM Sans
            font-size .875rem
            color black
            text-align right
            display flex
            justify-content flex-end
            .bar
              margin 10px 0
              width 21px
              height 4px
              background #C3CFDF
              border-radius 12px
            &:not(.website)
              margin-right 1.75rem
            &.website
              flex-basis initial
              margin-right 1rem
              background #C5DCFC
              border-radius 5px
              display flex
              justify-content center
              a
                cursor pointer
                font-family DM Sans
                font-weight normal
                font-size 1rem
                color $secondaryColor
                padding 0 1rem
          &:not(:last-child)
            border-bottom 1px solid #C5DCFC
</style>

<script>
export default {
  name: 'CompareSpec',
  computed: {
    current: function () {
      return this.colData.find((c) => c.heading === this.selected)
    }
  },
  data: () => ({
    selected: 'Open Microservice Guide',
    rowNames: [
      'Protocol',
      'Subscriptions',
      'Query / Mutations',
      'Designed for',
      'Slogan',
      'Website'
    ],
    colData: [{
      heading: 'OpenAPI /  SwaggerAPI',
      main: false,
      cols: [
        'HTTP',
        0,
        1,
        'APIs',
        'Define a standards, language-agnostic interface to RESTful APIs',
        'swagger.io/specification'
      ]
    }, {
      heading: 'AsyncAPI',
      main: false,
      cols: [
        'Any',
        1,
        0,
        'APIs',
        'For defining asynchronous APIs',
        'asyncapi.com'
      ]
    }, {
      heading: 'GraphQL',
      main: false,
      cols: [
        'Any',
        1,
        1,
        'APIs',
        'A query language for APIs and a runtime for fulfilling those queries with your existing data',
        'graphql.org'
      ]
    }, {
      heading: 'Open Microservice Guide',
      main: true,
      cols: [
        'Any',
        1,
        1,
        'Containers',
        'Turn containers into cloud-native libraries',
        'microservice.guide'
      ]
    }],
    logos: [{
      name: 'OpenAPI /  SwaggerAPI',
      src: 'swagger.svg'
    }, {
      name: 'AsyncAPI',
      src: 'async-api.svg'
    }, {
      name: 'GraphQL',
      src: 'gql.svg'
    }, {
      name: 'Open Microservice Guide',
      src: 'logo.svg'
    }]
  })
}
</script>