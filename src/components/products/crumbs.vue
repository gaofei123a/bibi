<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
  <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
  <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {

}
</script>
