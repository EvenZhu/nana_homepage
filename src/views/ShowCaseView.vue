<template>
    <div class="ShowCaseView">
        <h3>showcase</h3>
        <h3>A selection of current and past projects</h3>
        <div class="rank">
        <div class="left col_center">
            <h1>CHOOSE AUTO-PC</h1>
            <img class="mine_img" src="../assets/auto.png">
        </div>
        <div class="right col_center">
            <h4>CLIENT: Dieste</h4>
            <h4>AGENACY: DJNR</h4>
            <p style="color: #4B4B4B">"As soon as we knew we had the budget to do a new company website, we reached out to DJNR Interactive. We have been working with them for several years and knew the quality of work they do. Our latest project before Dieste.com was a mock up travel agency site for a bookstore that won several awards and got worldwide recognition. The goal for our site was to have our work be the main selling point of our company and we worked closely with DJNR´s team to achieve the best solution. They brought a lot of input onto what things would enhance what we had in mind. We needed an easy to update site and DJNR built a custom CMS that allow us to do changes quickly. We are really proud of the final product."</p>
            <h4 class="left" style="color: #4B4B4B"> Roberto Hernández, Director Social & Digital Strategy </h4>
            <p>VIEW PROJECT ></p>
            <el-tag type="info" color="white" size="mini">HTML</el-tag>
        </div>
            <div class="sideBar">
                <div class="side_wrap">
                    <div
                            class="side_item"
                            @click="handleClick(item, index)"
                            v-for="(item, index) in sideList"
                            :class="{ active: item.active }"
                            :key="index"
                    >
                        {{ item.text }}
                    </div>
                </div>
                <div class="side_content">
                    <div
                            class="content_item"
                            :id="`content${index}`"
                            v-for="(item, index) in contentList"
                            :key="index"
                            :style="{ background: item.color }"
                    >
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ShowCaseView",
        data() {
            return {
                sideList: [
                    {
                        text: "2022———"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    },
                    {
                        text: "——"
                    }
                ],
            };
        },
        methods: {
            //   侧边栏点击
            handleClick(item, index) {
                this.clicked = true;
                this.resetSide();
                this.$set(this.sideList[index], "active", true);

                var element = document.getElementById(`content${index}`);
                // 让id为content${index}的元素滚动到浏览器窗口的可视区域内
                element.scrollIntoView();
            },
            // 重置侧边栏选中
            resetSide() {
                this.sideList.forEach((side, ind) => {
                    this.$set(this.sideList[ind], "active", false);
                });
            },
            handleScroll() {
                let scrollTop =
                    document.body.offsetTop || document.documentElement.scrollTop; // 获取滚动条位置
                if (this.clicked) {
                    this.clicked = false;
                    return;
                }
                for (let i = 0; i < this.list.length; i++) {
                    //未达到标题最低高度时
                    // if (scrollTop < this.list[0].offsetTop) {
                    //   break;
                    // }
                    //在标题区间中
                    //最后一个标题
                    if (i == this.list.length - 1) {
                        this.resetSide();
                        this.$set(this.sideList[i], "active", true);
                        break;
                    } else if (
                        scrollTop >= this.list[i].offsetTop &&
                        scrollTop < this.list[i + 1].offsetTop
                    ) {
                        this.resetSide();
                        this.$set(this.sideList[i], "active", true);
                        break;
                    }
                }
            }
        },
        mounted() {
            this.resetSide();
            this.$set(this.sideList[0], "active", true);
            // 获取每个大div的offsetTop
            this.list = [];
            this.contentList.forEach((item, ind) => {
                let obj = {
                    offsetTop: document.querySelector(`#content${ind}`).offsetTop
                };
                this.list.push(obj);
            });
            // 监听滚动事件
            window.addEventListener("scroll", this.handleScroll);
        }
    };

</script>

<style scoped>
    .rank{
        height: 350px;
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        padding: 60px;
        background-color: #151719;
    }

    .left {
        z-index: 100;
        padding-bottom:3%;
        padding-left: 18%;
        align-items: start;
    }
    .right{
        padding-right: 25%;
        align-items: start;
        font-size: 12px;
    }
    .side_wrap {
        width: 100px;
        position: fixed;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: white;
        text-align: right;
    }
    .side_item {
        height: 30px;
    }

    .mine_img {
        width: 350px;
        height: 200px;
        margin-right: 100px;
    }

    h1{
        color: crimson;
        font-size: 50px;
    }
    h3 {
        margin-left: 50px;
        color: white;
        font-size: 16px;
    }
    h4{
       color: white;
    }
    p{
        color: white;
    }

</style>