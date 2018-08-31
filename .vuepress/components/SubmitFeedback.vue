<template>
    <div class="feedback">
        <div class="wrap-content">
            <h1>Get Involved</h1>
            <p>
                Have feedback, questions or would like to support OMG. </br>
                Please drop your email in below.
            </p>
            <form name="contact" method="POST">
                <div>
                    <input type="email" name="email" placeholder="Search">
                </div>
                <div>
                    <textarea name="message" rows="7" cols="50" placeholder="Message(Optional)"></textarea>
                </div>
                <div>
                    <button class="round-button" type="submit">Send</button>
                </div> 
            </form>
        </div>
        <div class="feedback-img"></div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" scoped>
@import "../config.styl"
.feedback 
    position relative
    background #111420
    color white
    padding 4rem 0px 5rem 0px
  input,textarea 
    color white
    border 1px solid #41434d!important
    border-radius 6px
    background transparent
    outline none
    padding 0.4rem 1rem
    font-size: $inputSize
    max-width: 30rem
  h1,p
    margin-bottom 30px
  form div 
    margin-bottom 20px  
  .feedback-img 
    position absolute
    right 0px
    top -10px
    width 600px
    height calc(100% + 10px)
    background-image url('/footer_graphic.svg')
    background-size cover
@media (max-width: $SCMedium) 
  .feedback
    .feedback-img 
        display none
@media (max-width: $SCMobileNarrow)
    input,textarea
        max-width: 90%
</style>