// 简介页面
<template>
  <div class="synopsis_page">
    <div class="synopsis_img">
      <div>
        <img src="/assets/位图.png" alt="" />
      </div>
      <div>
        <div>
          <img src="/assets/编组 8.png" alt="" />
        </div>
        <div><img src="/assets/编组 9.png" alt="" /></div>
        <div><img src="/assets/编组 8.png" alt="" /></div>
        <div><img src="/assets/编组 9.png" alt="" /></div>
      </div>
    </div>
    <div class="synopsis_msg">
      <div v-for="item in synopsisMsgOne" :key="item.id" class="synopsisMsgOne">
        <div>|{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
        <div>{{ item.three }}</div>
      </div>
      <div v-for="item in synopsisMsgTwo" :key="item.id" class="synopsisMsgTwo">
        <div class="ynopsisMsgTwotitle">|{{ item.title }}</div>
        <div class="synopsisMsgTwomsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
          <div>{{ item.five }}</div>
          <div>{{ item.six }}</div>
        </div>
      </div>
      <div v-for="item in synopsisMsgThree" :key="item.id" class="synopsisMsgThree">
        <div class="synopsisMsgThreetitle">|{{ item.title }}</div>
        <div class="synopsisMsgThreemsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
        </div>
      </div>
      <div v-for="item in synopsisMsgFour" :key="item.id" class="synopsisMsgFour">
        <div>{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.synopsis_page {
  display: flex;
  width: 70%;
  margin-left: 11%;
  margin-top: 10px;
}
.synopsis_img {
  flex: 1;
}
.synopsis_img img {
  width: 100%;
  height: 100%;
}
.synopsis_msg {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.synopsis_img :nth-child(2) {
  display: flex;
  justify-content: space-between;
}
.synopsis_img :nth-child(2) div {
  width: 22%;
  margin-top: 10px;
}
.synopsisMsgOne {
  background: #f8fafc;
  border-radius: 8px;
}
.synopsisMsgOne :nth-child(1) {
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.synopsisMsgOne :nth-child(2),
.synopsisMsgOne :nth-child(3),
.synopsisMsgOne :nth-child(4),
.synopsisMsgOne :nth-child(5) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  line-height: 28px;
  font-weight: 400;
  margin-top: 5px;
  margin-left: 20px;
}
.synopsisMsgTwo {
  background: #f8fafc;
  border-radius: 8px;
}
.ynopsisMsgTwotitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.synopsisMsgTwomsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.synopsisMsgTwomsg div {
  margin-top: 5px;
  width: 30%;
}
.synopsisMsgThree {
  margin-top: 5px;
  background: #f8fafc;
  border-radius: 4px;
}
.synopsisMsgThreetitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.synopsisMsgThreemsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.synopsisMsgThreemsg div {
  width: 30%;
  margin-top: 5px;
}
.synopsisMsgFour {
  background: #f8fafc;
  border-radius: 8px;
}
.synopsisMsgFour :nth-child(1) {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.synopsisMsgFour :nth-child(2),
.synopsisMsgFour :nth-child(3) {
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
      synopsisMsgOne: [
        {
          id: 0,
          title: "功能介绍",
          one: "1. 输入待查人员的身份证号码",
          two: "2. 登录核酸系统根据身份证号码进行查询人员最新一次的核酸记录",
          three: "3. 返回人员最新一次1核酸记录结果"
        }
      ],
      synopsisMsgTwo: [
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
      synopsisMsgThree: [
        {
          id: 0,
          title: "技术详情",
          one: "机器人单次",
          two: "节省时间",
          three: "每月执行次数",
          four: "5分钟"
        }
      ],
      synopsisMsgFour: [
        {
          id: 0,
          title: "版本规格 V1.0",
          one: "版本信息",
          two: "XXXXXXXXXXXX"
        }
      ]
    };
  },
  beforeMount() {
    console.log(this.$route.params.id);
  }
};
</script>