<template>
  <div class="dash-background">
    <div class="header">
      <div class="pull-left">
        <SearchBox></SearchBox>
      </div>
      <div class="pull-right" @click="openGithub()">
        <div class="github-img pull-left"></div>
        <span>{{$site.themeConfig.repoLabel}}</span>
      </div>
    </div>
    <div class="container">
      <div class="omg-area">
        <div class="row">
          <div class="omg-img pull-left"></div>
          <div class="pull-left microservice">
            Open</br>
            Microservice</br>
            Guide
          </div>
        </div>
        <div class="reusable-text"> {{reusable_text}}</div>
        <button class="round-button" @click="getStarted()">
            {{get_started}}
            <div class="forward-img pull-right"></div>
           </button>
      </div>
    </div>
    <div class="header-graphic"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      openGithub() {
        window.open("https://github.com/microservices/microservice.guide");
      },
      getStarted() {
        this.$router.push("/overview/");
      }
    },
    data() {
      return {
        reusable_text: "The open standard for resusable microservices",
        get_started: "Get Started"
      }
    }
  }
</script>

<style>
  .dash-background {
    position: relative;
    background-color: #111420;
    height: 100vh;
    min-height: 500px!important;
    color: white;
  }
  
  .round-button {
    border: 1.5px solid #0fc065;
    border-radius: 18px;
    background: transparent;
    color: #0fc065;
    padding: 7px 25px;
    outline: none;
  }
  
  .header {
    padding: 40px 40px 0px 40px;
    font-size: 12px;
    cursor: pointer;
  }
  
  .github-img {
    width: 18px;
    height: 16px;
    background-image: url('/github_icon.svg');
    background-size: cover;
    margin-right: 10px;
  }
  
  .omg-area {
    margin-top: 20%;
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .omg-img {
    width: 390px;
    height: 130px;
    background-image: url('/omg_logo.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  .forward-img {
    width: 12px;
    height: 10px;
    background-image: url('/arrow_icon.svg');
    background-size: cover;
    margin-top: 5px;
    margin-left: 8px;
  }
  
  .header-graphic {
    position: absolute;
    right: 0px;
    top: calc(100% - 225px);
    width: 430px;
    height: 450px;
    background-image: url('/header_graphic.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .microservice {
    margin-left: 15px;
    font-size: 30px;
  }
  
  .reusable-text {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-weight: 300;
  }
  @media (max-width: 768px){
    .omg-img {
      width: 270px;
      height: 90px;
    }
    .microservice {
      font-size: 20px;
    }
    .header-graphic {
      display: none;
    }
  }
</style>