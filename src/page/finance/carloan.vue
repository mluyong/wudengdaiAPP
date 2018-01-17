<template>
    <div>
      <mt-navbar v-model="selected" class="carloan-title">
            <mt-tab-item id="1">新车贷</mt-tab-item>
            <mt-tab-item id="2">二手车贷</mt-tab-item>
            <div class=""><img src="../../../static/img/go-back-left.png"/></div>
        </mt-navbar>

        

<!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell class="carloan-content">
                    <ul>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>20%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>20%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>20%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>20%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell class="carloan-content">
                    <ul>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/carloandetail">
                                <img src="../../../static/img/dzbl.jpg" alt="">
                                <p>首付<span>30%</span></p>
                                <p>两证一卡，审批快</p>
                            </router-link>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
    data(){
        return{
            selected:true
        }
    }
};
</script>

<style scoped>
@import url('../../../static/css/common.css');
.carloan-title{
    z-index: 9999;
}
.carloan-content{
    z-index: -9999;
    background-color: #dbdbdb;
}
.carloan-content ul{
    width: 100%;
    font-size: 0px;
    margin: 0 2.5px;
    text-align: center;
}
.carloan-content ul li{
    width: calc( 100% / 2 - 5px );
    margin: 0px 2.5px 5px 2.5px;
    display: inline-block;
    background-color: white;
    padding-bottom: 5px;
}
.carloan-content ul li img{
    width: 100%;
}
.carloan-content ul li p{
    font-size: 12px;
    color: rgba(51,51,51,1);
    line-height: 17px;
}
.carloan-content ul li p span{
    color: red;
}
</style>
