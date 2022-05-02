// 在线视频页面
<template>
  <div class="online_page">
    <div class="onlineMsg">
      <video width="100%" height="100%" controls>
        <source
          src="https://poss-videocloud.cns.com.cn/oss/2022/05/02/chinanews/MEIZI_YUNSHI/onair/45B7DEADDEC343B490D801F58B1773FD.mp4"
          type="video/mp4"
        />
        <source
          src="https://poss-videocloud.cns.com.cn/oss/2022/05/02/chinanews/MEIZI_YUNSHI/onair/45B7DEADDEC343B490D801F58B1773FD.ogg"
          type="video/ogg"
        />
        <source
          src="https://poss-videocloud.cns.com.cn/oss/2022/05/02/chinanews/MEIZI_YUNSHI/onair/45B7DEADDEC343B490D801F58B1773FD.webm"
          type="video/webm"
        />
        <object
          data="https://poss-videocloud.cns.com.cn/oss/2022/05/02/chinanews/MEIZI_YUNSHI/onair/45B7DEADDEC343B490D801F58B1773FD.mp4"
          width="100%"
          height="100%"
        >
          <embed
            src="https://poss-videocloud.cns.com.cn/oss/2022/05/02/chinanews/MEIZI_YUNSHI/onair/45B7DEADDEC343B490D801F58B1773FD.swf"
            width="100%"
            height="100%"
          />
        </object>
      </video>
    </div>
    <div class="online_msg">
      <div v-for="item in onlineMsgOne" :key="item.id" class="onlineMsgOne">
        <div>|{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
        <div>{{ item.three }}</div>
      </div>
      <div v-for="item in onlineMsgTwo" :key="item.id" class="onlineMsgTwo">
        <div class="onlineMsgTwotitle">|{{ item.title }}</div>
        <div class="onlineMsgTwomsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
          <div>{{ item.five }}</div>
          <div>{{ item.six }}</div>
        </div>
      </div>
      <div v-for="item in onlineMsgThree" :key="item.id" class="onlineMsgThree">
        <div class="onlineMsgThreetitle">|{{ item.title }}</div>
        <div class="onlineMsgThreemsg">
          <div>{{ item.one }}</div>
          <div>{{ item.two }}</div>
          <div>{{ item.three }}</div>
          <div>{{ item.four }}</div>
        </div>
      </div>
      <div v-for="item in onlineMsgFour" :key="item.id" class="onlineMsgFour">
        <div>{{ item.title }}</div>
        <div>{{ item.one }}</div>
        <div>{{ item.two }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.online_page {
  display: flex;
  width: 70%;
  margin-left: 11%;
  margin-top: 10px;
}
.onlineMsg {
  flex: 1;
}
/* 左侧信息 */

/* 右侧信息 */
.online_msg {
  flex: 1;
  margin-left: 10px;
}
.onlineMsgOne {
  background: #f8fafc;
  border-radius: 8px;
}
.onlineMsgOne :nth-child(1) {
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.onlineMsgOne :nth-child(2),
.onlineMsgOne :nth-child(3),
.onlineMsgOne :nth-child(4),
.onlineMsgOne :nth-child(5) {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #191919;
  line-height: 28px;
  font-weight: 400;
  margin-top: 5px;
  margin-left: 20px;
}
.onlineMsgTwo {
  background: #f8fafc;
  border-radius: 8px;
  margin-top: 20px;
}
.onlineMsgTwotitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.onlineMsgTwomsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.onlineMsgTwomsg div {
  margin-top: 5px;
  width: 30%;
}
.onlineMsgThree {
  margin-top: 5px;
  background: #f8fafc;
  border-radius: 4px;
  margin-top: 20px;
}
.onlineMsgThreetitle {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.onlineMsgThreemsg {
  display: flex;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #595959;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
}
.onlineMsgThreemsg div {
  width: 30%;
  margin-top: 5px;
}
.onlineMsgFour {
  background: #f8fafc;
  border-radius: 8px;
  margin-top: 20px;
}
.onlineMsgFour :nth-child(1) {
  margin-top: 5px;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  font-weight: 600;
  margin-left: 20px;
}
.onlineMsgFour :nth-child(2),
.onlineMsgFour :nth-child(3) {
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
      onlineMsgOne: [
        {
          id: 0,
          title: "功能介绍",
          one: "1. 输入待查人员的身份证号码",
          two: "2. 登录核酸系统根据身份证号码进行查询人员最新一次的核酸记录",
          three: "3. 返回人员最新一次1核酸记录结果"
        }
      ],
      onlineMsgTwo: [
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
      onlineMsgThree: [
        {
          id: 0,
          title: "技术详情",
          one: "机器人单次",
          two: "节省时间",
          three: "每月执行次数",
          four: "5分钟"
        }
      ],
      onlineMsgFour: [
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