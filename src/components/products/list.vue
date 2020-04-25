<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">{{ item.name }}</li>
    </ul>
    <el-row>
        <item v-for="(item,index) in productlist"
        :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
import item from './item'
export default {
    components:{
        item
    },
    data() {
        return{
            nav:[{
                key:'s-default',
                name:'智能排序',
                active:true
            },{
                key:'s-price',
                name:'价格最低',
            },{
                key:'s-score',
                name:'人气最高',
            },{
                key:'s-comment',
                name:'评价最高',
            }
            ],
            productlist:[]       
     }
    },
    created () {
        api.getProductsList().then(res=>{
            this.productlist = res.data.data; 
        })
    }
}
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>