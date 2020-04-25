<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in HotPlaceList" :key="item + '_' + index">
              <router-link to="{name:'goods',params:{name:item}}">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in SearchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <!-- <a href="">京东第一温泉度假村</a>
                    <a href="#">99旅馆连锁</a>
                    <a href="#">尚客优快捷酒店</a>
          <a href="#">7天连锁酒店</a>-->
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link>
          <!-- <router-link to="/">北京故宫博物院</router-link>
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link  to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link  to="/">故宫珍宝馆</router-link>
                    <router-link  to="/">北京连升商务酒店</router-link>
          <router-link  to="/">  </router-link>-->
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            searchWord:'',
            isFocus:false,
            HotPlaceList:[],
            SearchList:[],
            suggestList: []
        }
    },
    created(){
        api.searchHotWords().then(res=>{
            // console.log(res);   
            // console.log(1)     
            this.HotPlaceList = res.data.data;
            this.suggestList = res.data.data;
        });
        console.log(this.searchWord);
    },
    computed:{
        isHotPlace() {
            return !this.searchWord && this.isFocus;
        },
        isSearchList() {
            return !this.searchWord && this.isFocus;
        },
        
        
    },
    watch:{
            "$route.params.name": function () {
            this.searchWord = this.$route.params.name;
            }
        },
    methods:{
        focusInput() {
            this.isFocus = true;
        },
        blurInput() {
            var self = this;
            setTimeout(function(){
                self.isFocus = false;
            },200)
        },
        input() {
            // let val =this.input
            // console.log(this.searchWord);
            let val = this.searchWord
            api.getSearchList().then(res=>{
                console.log(res);
                this.searchList = res.data.data.list.filter((item, index) => {
                    return item.indexOf(val) > -1;
                });
            // console.log(res);        
            // this.HotPlaceList = res.data.data;
            // this.suggestList = res.data.data;
            });
            // console.log(this.searchList);


        }
    }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>