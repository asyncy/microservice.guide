<template>
  <div id="ms-guide">
    <Dashboard/>
    <Explanation/>
    <Feature/>
    <SubmitFeedback/>
    <Footer />
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus">
@import "../config.styl"

#ms-guide
  color black
  .wrap-content 
    width 75%
    margin 0 auto
  .flex-container
    display flex
    flex-direction row
  h1
    font-size 4.2rem
    font-weight bold
  p
    font-size $lnSize
    font-weight 400
  .round-button 
    display flex
    padding 0.8rem 1.8rem
    background transparent
    color $rBtnColor
    border 1.5px solid $rBtnColor
    border-radius 25px
    font-size $inputSize
    outline none
    cursor pointer
</style>
