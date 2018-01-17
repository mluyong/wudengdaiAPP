<template>
    <div>
      <div class="appoint-pop-box">
      <div class="appoint-pop-box-pad">
        <div class="appoint-pop">
            <div class="appoint-word">400-85692</div>
            <div class="appoint-line"></div>
            <div>
              <div class="float_left appoint-call">拨打</div>
              <div class="float_left appoint-cancel" @click="appointHide()">取消</div>
            </div>
        </div>
      </div>
    </div>    
    </div>  
</template>

<script>
export default {
    data(){
        return{
            appointPop:false
        }
    },

}
</script>

<style>

</style>
