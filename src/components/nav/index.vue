// 首页头部
<template>
  <div class="c-nav">
    <div class="header">
      <div class="log">
        <div><img src="/assets/编组 8.png" alt="" /></div>
        <div><img src="/assets/编组 8.png" alt="" /></div>
        <div><span>福田街道办机器人雇员服务中心</span></div>
      </div>
      <div class="navigator">
        <div index="1">
          <router-link :to="{ name: 'home' }">机器人服务中心</router-link>
        </div>
        <div index="2"><router-link :to="{ name: 'example' }">机器人雇员平台</router-link></div>
        <div index="3">
          <a
            href="https://bbs.huaweicloud.com/forum/forum.php?mod=forumdisplay&orderby=lastpost&fid=1371"
            target="_blank"
            >培训页面</a
          >
        </div>
        <div index="4">
          <a
            href="https://bbs.huaweicloud.com/forum/forum.php?mod=forumdisplay&orderby=lastpost&fid=1371"
            target="_blank"
            >互动留言</a
          >
        </div>
      </div>
      <div class="login">
        <div class="lang"><span>中文</span></div>
        <div class="login_msg">
          <div><router-link :to="{}">登录</router-link></div>
          <span>/</span>
          <div><router-link :to="{}">注册</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template> 


<style scoped>
/* header */
.header {
  z-index: 1;
  width: 100%;
  height: 6rem;
  display: flex;
  background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}
.log,
.navigator,
.login {
  flex: 1;
  display: flex;
}
.log :nth-child(1) {
  width: 3.4rem;
  height: 3.2rem;
  margin-left: 10%;
  margin-top: 2.5%;

}
.log :nth-child(1) img {
  width: 100%;
  height: 100%;
}
.log :nth-child(2) {
  width: 3.1rem;
  height: 3.2rem;
  margin-left: 3%;
  margin-top: 2.5%;

}
.log :nth-child(3) {
  width: 50%;
  font-family: PingFangSC-Semibold;
  color: #ffffff;
  font-weight: 600;
  height: 100%;
  margin-top: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.log :nth-child(3) span {
  width: 100%;
  font-size: 1vw;
}
.navigator {
  display: flex;
}
.navigator div {
  flex: 1;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 1vw;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.navigator div a {
  line-height: 6rem;
  color: #ffffff;
}
.login {
  width: 100%;
  height: 6rem;
  display: flex;
  color: #ffffff;
  justify-content: flex-end;
}
.lang {
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #ffffff;
  font-weight: 400;
  margin-right: 8%;
  line-height: 60px;
}
.login_msg {
  height: 60px;
  display: flex;
  margin-right: 10%;
}
.login_msg :nth-child(1) a {
  font-family: PingFangSC-Regular;
  font-size: 1.05vw;
  color: #eb171f;
  line-height: 60px;
  font-weight: 400;
  margin-right: 4px;
}
.login_msg :nth-child(2) {
  line-height: 60px;
  font-size: 1.05vw;
}
.login_msg :nth-child(3) a {
  font-family: PingFangSC-Regular;
  font-size: 1.05vw;
  color: #ffffff;
  line-height: 60px;
  font-weight: 400;
  margin-left: 4px;
}
</style>

<script>
export default {
  data() {
    return {
      border_bottom: ""
    };
  },
  methods: {
    // border_bottom() {
    //   console.log(1);
    // }
  }
};
</script>

