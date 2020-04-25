<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type">{{ item.name }}</i>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curdetail" class="detail" @mouseenter="detailenter" @mouseleave="detailleave">
      <template v-for="(item,index) in curdetail.items">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v,i) in item.items" :key="v + '_' + i">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curdetail: null,
      menuList: []
    }
  },
  created(){
    api.getMenuList().then(res=>{
      this.menuList = res.data.data;
      // console.log(res)
    })
  },
  methods:{
      menuEnter(item){
        //   console.log(item);
          this.curdetail = item;
      },
      menuLeave() {
          var self = this;
          this.timer = setTimeout(() => {
              self.curdetail = null;
          }, 200);   
      },
      detailenter(){
          clearTimeout(this.timer);
      },
      detailleave(){
          this.curdetail = null;
      }
  }
};
</script>
