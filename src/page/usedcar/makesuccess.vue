<template>
  <div>
    <div class="fixed"></div>
    <div class="makesuccess"></div>
    <div class="makesuccess-word">预约成功</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fixed{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0px;
    background-color: white;
    z-index: -9;
}
.makesuccess{
  height: 180px;
  width: 180px;
  margin:0 auto;
  background: url('../../../static/img/ok.png') no-repeat;
  background-size: 100% 100%;
  margin-top:100px;

}
.makesuccess-word{
  width:100%;
  text-align: center;
  font-size: 40px;
  font-weight:400;
  margin-top:20px;
}
</style>
