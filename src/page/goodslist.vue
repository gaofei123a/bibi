<template>
  <div class="page-product">
      <el-row class="m-crumbs">
          <crumbs />
      </el-row>
      <el-row>
          <el-col :span="19">
              <el-row><categroy /></el-row>
              <el-row><list /></el-row>
          </el-col>
          <el-col :span="5">
              map+fav
          </el-col>
      </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/products/crumbs'
import categroy from '@/components/products/categroy'
import list from '@/components/products/list'
export default {
    components:{
        crumbs,
        categroy,
        list
    }
}
</script>

<style lang="scss">
@import"@/assets/css/products/index.scss";
</style>