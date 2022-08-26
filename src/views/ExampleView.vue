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
        <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
        <el-time-picker
                v-model="value1"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
                arrow-control
                v-model="value2"
                :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点">
        </el-time-picker>
        <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
                    v-model="value1"
                    :colors="colors">

            </el-rate>
        </div>
        <el-rate
                v-model="value"
                show-text>
        </el-rate>
        <el-color-picker v-model="color"></el-color-picker>
        <el-skeleton :rows="6" animated/>
    </div>
</template>

<script>
    export default {
        name: 'ExampleView',
        data() {
            return {
                value:null,
                value1: null,
                value2: new Date(2016, 9, 10, 18, 40),
                value3: new Date(2016, 9, 10, 18, 40),
                colors:['#99A9BF', '#F7BA2A', '#FF9900'],
                color:'#409EFF'
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
