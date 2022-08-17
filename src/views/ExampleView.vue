<template>
    <div class="ExampleView">
      <h1 style="background-color: white">示例页面</h1>
      <el-select v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
        <div>
        <i class="el-icon-edit"></i>
        <i class="el-icon-info"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
        <div>
            <el-row>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
        </div>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <div>
            <el-link href="https://cn.vuejs.org/guide/introduction.html" target="_blank">Vue.js</el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ExampleView',
        data() {
          return {

            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          }
        }
    };
</script>
<style scoped>

    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 50px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    i{
        color: white;
    }
</style>
