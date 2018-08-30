<template>
    <div class="feedback">
        <div class="container">
            <h1 class="white-text htitle">Get Involved</h1>
            <p class="white-text">
                Have feedback, questions or would like to support OMG. </br>
                Please drop your email in below.
            </p>
            <form name="contact" method="POST" netlify>
                <p>
                    <input type="email" style="font-size:1.2em" name="email">
                </p>
                <p>
                    <textarea name="message" rows="4" cols="50"></textarea>
                </p>
                <p>
                    <button class="round-button" type="submit">Send</button>
                </p> 
            </form>
        </div>
        <div class="feedback-img"></div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus">
.feedback 
    position relative
    background #111420
    padding 40px 0px 60px 0px
  input,textarea 
    border 1px solid #41434d!important
    border-radius 6px
    background transparent
    outline none
    padding 4px 15px
  h1,p
    margin-bottom 30px
  form p 
    margin-bottom 15px  
  .feedback-img 
    position absolute
    right 0px
    top -10px
    width 410px
    height calc(100% + 10px)
    background-image url('/footer_graphic.svg')
    background-size cover
@media (max-width: 768px) 
  .feedback-img 
    display none
</style>