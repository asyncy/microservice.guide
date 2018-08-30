<template>
    <div class="feature">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="f-circle"></div>
                    <h4>Reusability</h4>
                    <p>Focus is stressed on services</br> being highly reusable between</br> applications and platforms.</p>
                </div>
                <div class="col-sm-4">
                    <div class="f-circle"></div>
                    <h4>Management</h4>
                    <p>Define how to interface with</br> the service, lifecycle management,</br> scaling, among other requirements.</p>
                </div>
                <div class="col-sm-4">
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

<style scoped>
    .feature {
        background: #f2f4f6;
        font-size: 14px;
    }
    .feature div.container {
        padding-top: 65px;
        padding-bottom: 55px;
    }
    .feature h4 {
        font-weight: bold;
        font-size: 19px;
        margin: 15px 0px 15px 0px;
    }
    
    .f-circle {
        width: 60px;
        height: 60px;
        background-image: url('/placeholder.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>