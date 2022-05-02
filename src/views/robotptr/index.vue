// 机器人详情页面
<template>
  <div class="robot_page">
    <!-- 导航栏屑 -->
    <div class="nav_crumbs"></div>
    <div class="robot">
      <div class="robot_img"><img src="assets/矩形.svg" alt="机器人" /></div>
      <div class="robot_msg" v-for="item in robot_msg" :key="item.id">
        <div class="robot_name">{{ item.name }}</div>
        <div class="robot_evaluate">
          <div class=""><img src="/assets/wujiaoxing-.png" alt="" /></div>
          <div class="robot"><img src="/assets/wujiaoxing-.png" alt="" /></div>
          <div class=""><img src="/assets/wujiaoxing-.png" alt="" /></div>
          <div class=""><img src="/assets/wujiaoxing.png" alt="" /></div>
          <div class=""><img src="/assets/wujiaoxing.png" alt="" /></div>
          <div>|</div>
          <div>使用次数 : {{ item.num }}</div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navigator">
      <div
        v-for="item in navigator"
        :key="item.id"
        class="nav_msg"
        :class="changeBorder == item.id ? 'changeBorder' : ''"
        @click="changenav(item.id)"
      >
        <div>
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="cut_off_rule"></div>
    <!-- 导航栏下的子页面-->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.robot_page {
  width: 100%;
  border-top: 1px solid red;
}
/* 导航栏面包屑 */
.nav_crumbs {
  width: 100%;
  height: 50px;
}
.robot {
  display: flex;
}
.robot_img {
  width: 96px;
  height: 96px;
  margin-left: 10%;
  margin-top: 10px;
}
.robot_msg {
  display: flex;

  flex-direction: column;
}
.robot_name {
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #191919;
  font-weight: 600;
  margin-top: 10px;
}
.robot_evaluate {
  display: flex;
  margin-top: 20px;
  height: 20px;
}
.robot_evaluate div img{
  width: 90%;
  height: 90%;

}
.robot_evaluate :nth-child(6) {
  font-family: FZLTHJW--GB1-0;
  font-size: 14px;
  color: #676767;
  line-height: 20px;
  font-weight: 400;
  margin-left: 30px;
}
.robot_evaluate :nth-child(7) {
  font-family: FZLTHJW--GB1-0;
  font-size: 14px;
  color: #676767;
  line-height: 20px;
  font-weight: 400;
  margin-left: 30px;
}
/* 导航栏 */
.navigator {
  height: 50px;
  display: flex;
  margin-left: 8%;
  margin-top: 20px;
  line-height: 50px;
}
.nav_msg {
  width: 10%;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #707070;
  font-weight: 400;
}
.cut_off_rule {
  background: #d8d8d8;
  height: 1px;
  width: 70%;
  margin-left: 11%;
}
.changeBorder {
  font-weight: 500;
  font-size: 18px;
  color: #007aff;
  border-bottom: 2px solid #007aff;
}
.el-icon-star-off {
  line-height: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      robot_msg: [
        {
          id: 0,
          name: "数据采集雇员",
          evaluate: 3,
          num: 3
        }
      ],
      navigator: [
        {
          id: 0,
          name: "简介"
        },
        {
          id: 1,
          name: "在线使用"
        },
        {
          id: 2,
          name: "版本信息"
        },
        {
          id: 3,
          name: "相关视频"
        }
      ],
      changeBorder: 0
    };
  },
  methods: {
    changenav(id) {
      console.log(id);
      this.changeBorder = id;
      if (id == 0) {
        this.$router.push("/robotsynopsis");
      } else if (id == 1) {
        this.$router.push("/robotOnlineuse");
      } else if (id == 2) {
        this.$router.push("/robotverfsions");
      } else if (id == 3) {
        this.$router.push("/robotvideo");
      }
    }
  },
  beforeMount() {
    console.log(this.$route.params.id);
    this.$router.push("robotsynopsis");
  }
};
</script>