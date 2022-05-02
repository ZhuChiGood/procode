// 版本信息页面
<template>
  <div class="version_page">
    <div class="versionMsg">
      <div v-for="item in sersionsMsg" :key="item.id" class="sersionMsgDiv">
        <div class="sersionMsg_img">
          <img :src="item.serMsgImg" alt="小机器人" />
        </div>
        <div class="versionNumber">
          <div>版本号</div>
          <div>{{ item.versionNumber }}</div>
        </div>
        <div class="versionDate">
          <div>发布时间</div>
          <div>{{ item.versionDate }}</div>
        </div>
        <div class="dowload"><a href="">下载</a></div>
      </div>
    </div>
    <div class="version_msg">
      <div v-for="item in versionMsgOne" :key="item.id" class="versionMsgOne">
        <div>|{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
        <div>{{ item.three }}</div>
      </div>
      <div v-for="item in versionMsgTwo" :key="item.id" class="versionMsgTwo">
        <div class="versionMsgTwotitle">|{{ item.title }}</div>
        <div class="versionMsgTwomsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
          <div>{{ item.five }}</div>
          <div>{{ item.six }}</div>
        </div>
      </div>
      <div v-for="item in versionMsgThree" :key="item.id" class="versionMsgThree">
        <div class="versionMsgThreetitle">|{{ item.title }}</div>
        <div class="versionMsgThreemsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
        </div>
      </div>
      <div v-for="item in versionMsgFour" :key="item.id" class="versionMsgFour">
        <div>{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.version_page {
  display: flex;
  width: 70%;
  margin-left: 11%;
  margin-top: 10px;
}
.versionMsg {
  flex: 1;
}
/* 左侧信息 */
.sersionMsgDiv {
  display: flex;
  height: 70px;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 4px;
  margin-top: 20px;
}
.sersionMsg_img {
  height: 70px;
  margin-left: 30px;
}
.sersionMsg_img img {
  margin-top: 10px;
  line-height: 70px;
}
.versionNumber {
  margin-left: 15px;
  width: 100px;
}
.versionNumber :nth-child(1) {
  margin-top: 7px;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #707070;
  font-weight: 400;
}
.versionNumber :nth-child(2) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  font-weight: 400;
  margin-top: 8px;
}
.versionDate {
  margin-left: 65px;
  width: 120px;
}
.versionDate :nth-child(1) {
  margin-top: 7px;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #707070;
  font-weight: 400;
}
.versionDate :nth-child(2) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  font-weight: 400;
  margin-top: 8px;
}
.dowload {
  margin-left: 50px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 70px;
  font-weight: 400;
}
.dowload a{
    color: #007AFF;
}
/* 鼠标悬浮样式 */
.sersionMsgDiv:hover{
    box-shadow: 2px 2px 2px 2px #888888;
}
/* 右侧信息 */
.version_msg {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.versionMsgOne {
  background: #f8fafc;
  border-radius: 8px;
}
.versionMsgOne :nth-child(1) {
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.versionMsgOne :nth-child(2),
.versionMsgOne :nth-child(3),
.versionMsgOne :nth-child(4),
.versionMsgOne :nth-child(5) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  line-height: 28px;
  font-weight: 400;
  margin-top: 5px;
  margin-left: 20px;
}
.versionMsgTwo {
  background: #f8fafc;
  border-radius: 8px;
}
.versionMsgTwotitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.versionMsgTwomsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.versionMsgTwomsg div {
  margin-top: 5px;
  width: 30%;
}
.versionMsgThree {
  margin-top: 5px;
  background: #f8fafc;
  border-radius: 4px;
}
.versionMsgThreetitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.versionMsgThreemsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.versionMsgThreemsg div {
  width: 30%;
  margin-top: 5px;
}
.versionMsgFour {
  background: #f8fafc;
  border-radius: 8px;
}
.versionMsgFour :nth-child(1) {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.versionMsgFour :nth-child(2),
.versionMsgFour :nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  line-height: 28px;
  font-weight: 400;
  margin-top: 5px;
  margin-left: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      versionMsgOne: [
        {
          id: 0,
          title: "功能介绍",
          one: "1. 输入待查人员的身份证号码",
          two: "2. 登录核酸系统根据身份证号码进行查询人员最新一次的核酸记录",
          three: "3. 返回人员最新一次1核酸记录结果"
        }
      ],
      versionMsgTwo: [
        {
          id: 0,
          title: "基础信息",
          one: "类型",
          two: "自动化目的",
          three: "领域",
          four: "数据查询",
          five: "效率提升",
          six: "政务"
        }
      ],
      versionMsgThree: [
        {
          id: 0,
          title: "技术详情",
          one: "机器人单次",
          two: "节省时间",
          three: "每月执行次数",
          four: "5分钟"
        }
      ],
      versionMsgFour: [
        {
          id: 0,
          title: "版本规格 V1.0",
          one: "版本信息",
          two: "XXXXXXXXXXXX"
        }
      ],
      sersionsMsg: [
        {
          id: 0,
          serMsgImg: "/assets/小机器人.svg",
          versionNumber: "3.1.0-preview",
          versionDate: "2022年4月13日"
        },
        {
          id: 1,
          serMsgImg: "/assets/小机器人.svg",
          versionNumber: "3.1.0-preview",
          versionDate: "2022年4月13日"
        },
        {
          id: 2,
          serMsgImg: "/assets/小机器人.svg",
          versionNumber: "3.1.0-preview",
          versionDate: "2022年4月13日"
        },
        {
          id: 3,
          serMsgImg: "/assets/小机器人.svg",
          versionNumber: "3.1.0-preview",
          versionDate: "2022年3月14日"
        },
        {
          id: 4,
          serMsgImg: "/assets/小机器人.svg",
          versionNumber: "3.1.0-preview",
          versionDate: "2022年3月13日"
        }
      ]
    };
  },
  beforeMount() {
    console.log(this.$route.params.id);
  }
};
</script>