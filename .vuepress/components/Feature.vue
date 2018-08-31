<template>
    <div class="feature-area">
        <div class="wrap-content">
            <div class="features">
                <div class="feature">
                    <div class="f-circle"></div>
                    <h4>Reusability</h4>
                    <p>Focus is stressed on services being highly reusable between applications and platforms.</p>
                </div>
                <div class="feature">
                    <div class="f-circle"></div>
                    <h4>Management</h4>
                    <p>Define how to interface with the service, lifecycle management, scaling, among other requirements.</p>
                </div>
                <div class="feature">
                    <div class="f-circle"></div>
                    <h4>Documentation</h4>
                    <p>Services inherit documentation through a well defined configuration of commands, arguments
                        and output.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
@import "../config.styl"
.feature-area
    background #f2f4f6
    font-size $inputSize
    padding: 5rem 0 4rem 0
  h4 
    font-size 1.7rem
    font-weight: 500
    margin 15px 0px 15px 0px
  .features
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
  .f-circle 
    width 70px
    height 70px
    background-image url('/placeholder.svg')
    background-position center
    background-repeat no-repeat
    background-size cover
@media (max-width: $SCMobile)
  .features
    flex-direction: column;
  .feature
    max-width 100%
    padding 0 2.5rem
</style>