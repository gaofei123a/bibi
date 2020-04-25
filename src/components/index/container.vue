<template>
  <div class="m-istyle">
    <dl @mouseover="mouseover" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd v-for="(item,index) in nav.list" :key="index"
       :class="{active: kind == item.tab}" :data-type="item.tab">{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultData[kind]" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <img
                :src="item.image"
                class="image"/>
              <div class="cbody">
                    <div class="title" :title="item.title">{{ item.title }}</div>
                    <div class="sub-title" :title="item.sub_title">{{ item.subTitle }}</div>
                    <div class="price-info">
                       <span class="current-price-wrapper">
                       <span class="price-symbol numfont">¥</span>
                       <span class="current-price numfont">{{ item.price }}</span>
                       </span>
                       <!-- <span class="old-price">门市价¥{{ item.price_info.old_price }}</span> -->
                       <span class="sold bottom-right-info">{{ item.address }}</span>
                    </div>
              </div>
            </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            resultData:{},
            kind:'all',
        }
    },
    props: ["nav"],
    created(){
        api.getResultProducts().then(res=>{
            this.resultData = res.data.data;
            //console.log(res)
        })
    },
    methods:{
        mouseover(e){
            // console.log(e.target)
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            // console.log(tagName)
            if(tagName != 'dd') {
                return false;
            }
            this.kind = dom.getAttribute("data-type");
            // console.log(this.kind)
            //动态获取数据  ajax请求
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>