<template>
  <div>
    <span class="name">按省份选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      @change="changeprovince"
      :showWrapperActive="provinceActive"
      @change_active="changeprovinceactive"
      className="privince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      @change="changecity"
      :showWrapperActive="cityActive"
      @change_active="changecityactive"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWorld"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import api from '@/api/index.js'
import MSelect from "./select";
export default {
  data() {
    return {
      provinceList: [],
      loading: false,
      province: "省份",
      cityList: [],
      city: "城市",
      searchWorld: "",
      searchList: [
        "北京",
        "天津",
        "重庆",
        "上海",
        "江苏",
        "黑龙江",
        "山东",
        "广州",
        "浙江",
        "哈尔滨",
        "佳木斯",
        "牡丹江",
        "鹤岗"
      ],
      cityActive: false,
      provinceActive: false,
      cityDisabled: true
    };
  },
  created(){
    api.getProvinceList().then(res=>{
      // console.log(res);
      this.provinceList = res.data.data.map((item)=>{
        item.name = item.provinceName;
        return item;
        });
        // console.log(this.provinceList);
      // this.cityList = res.data.data.map((item)=>item.cityInfoList)
    })
  },
  components: {
    MSelect
  },
  methods: {
    changeprovinceactive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changecityactive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeprovince(item){
      this.province = item.name;
      console.log(item,this.cityList)
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changecity(item){
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    },
    remoteMethod(val) {
      // 请求后端接口
      // console.log(document.cookie, localStorage);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>