<template>
  <div class="home_page">
    <!-- 背景图 -->
    <div class="bgc_img">
      <img src="/assets/00等保备份.png" alt="福田街道办机器人雇员中心" />
    </div>
    <!-- 背景图文字 -->
    <div class="bgc_text">
      <div>福田街道办机器人雇员服务中心</div>
      <div>福田街道办机器人雇员服务中心福田街道办机器人雇员服务中心福田街道办机器人雇员服务中心</div>
      <div>
        <a href="">订阅机器人</a>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <div><input type="text" placeholder="搜索" /></div>
      <div><img src="assets/search.svg" alt="" /></div>
    </div>
    <!-- 机器人卡片部分 -->
    <div class="robot_card">
      <div class="navigator">
        <div class="nav1">
          <div v-for="nav in navigator" :key="nav.id" v-if="nav.id == 0" class="nav1_1">
            <div>{{ nav.name }}</div>
          </div>
          <div
            v-for="nav1 in navigator"
            v-if="nav1.parentId == 0"
            :key="nav1.id"
            :class="changeNav == nav1.id ? 'changeStyle' : ''"
            @click="changeborder(nav1.id)"
          >
            <a href="javascript:;" class="nav1_2">{{ nav1.name }}</a>
          </div>
        </div>
        <div class="nav2">
          <div v-for="nav in navigator" :key="nav.id" v-if="nav.id == 1" class="nav2_1">
            <div>{{ nav.name }}</div>
            <div
              v-for="nav1 in navigator"
              v-if="nav1.parentId == nav.id"
              :key="nav1.id"
              :class="changeNav == nav1.id ? 'changeStyle' : ''"
              @click="changeborder(nav1.id)"
            >
              <a href="javascript:;" class="nav2_2">{{ nav1.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="Card">
        <div class="card" v-for="item in employee" :key="item.id" @click="robotMsg(item.id)">
          <div class="card-one">
            <div class="card_img"><img :src="item.ec_img" alt="" /></div>
            <div class="card_name">{{ item.ec_Classification }}</div>
          </div>
          <div class="card_two">{{ item.ec_introduceL }}</div>
          <div>
            <div></div>
            <div class="card_three">
              <div>
                {{ item.btn1 }}
              </div>
              <div>
                {{ item.btn2 }}
              </div>
              <div class="el-icon-position">{{ item.num }}</div>
              <div class="el-icon-position">{{ item.num }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页数 -->
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        @prev-click="prevClick"
        @next-click="nextClick"
        :page-size="6"
        layout="total, prev, pager, next"
        :total="employee_Cf.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped>
/* 背景图 */
.bgc_img {
  margin-top: -60px;
  position: relative;
  width: 100%;
  height: 560px;
  z-index: -1;
}
.bgc_img img {
  width: 100%;
  height: 100%;
}
/* 背景图文字 */
.bgc_text {
  width: 80%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin-top: -450px;
  margin-left: 10%;
  position: absolute;
}
.bgc_text :nth-child(1) {
  width: 700px;
  height: 70px;

  font-family: PingFangSC-Semibold;
  font-size: 3.2vw;
  color: #ffffff;
  font-weight: 600;
  margin-top: 2%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.bgc_text :nth-child(2) {
  width: 628px;
  height: 66px;
  font-family: PingFangSC-Regular;
  font-size: 1.5vw;
  color: #bbbbbb;
  font-weight: 400;
  margin-top: 4%;
}
.bgc_text :nth-child(3) {
  width: 148px;
  height: 56px;
  background: #eb171f;
  border-radius: 20px;
  margin-top: 5%;
  line-height: 56px;
  text-align: center;
}
.bgc_text :nth-child(3) a {
  font-family: PingFangSC-Semibold;
  font-size: 1.4vw;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
}
/* 搜索框部分 */
.search {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-top: 5%;
  margin-top: 5%;
}
.search div {
  width: 62.8%;
  height: 100%;
  margin-left: 30%;
  z-index: -1;
}
.search div input {
  width: 62.8%;
  height: 100%;
  border: 1px solid rgba(187, 187, 187, 1);
  border-radius: 4px;
}
.search :nth-child(2) {
  z-index: 1;
  width: 30px;
  height: 30px;
  position: absolute;
  margin-top: -40px;
  margin-left: 67%;
}
.search :nth-child(2) img {
  margin-top: 7px;
  width: 100%;
  height: 100%;
}
/* 机器人卡片部分 */
.robot_card {
  width: 80%;
  height: 500px;
  margin-left: 10%;
  margin-top: 30px;
  display: flex;
  margin-bottom: 5px;
}
/*  导航栏部分*/
.navigator {
  width: 20%;
  margin-top: 18px;
}
.nav1,
.nav2 {
  height: 50%;
  width: 90%;
}
.nav1_1,
.nav2_1 {
  width: 100%;
  height: 40px;
  font-family: PingFangSC-Semibold;
  font-size: 1.4vw;
  color: #191919;
  line-height: 40px;
  font-weight: 600;
}

.nav1_2,
.nav2_2 {
  width: 100%;
  height: 40px;
  font-family: PingFangSC-Regular;
  font-size: 1.1vw;
  color: black;
  font-weight: 400;
  line-height: 40px;
  margin-left: 20px;
}
.changeStyle {
  border-left: 2px solid red;
  background-color: white;
  border-radius: 4px;
  color: red;
}
/* 卡片部分 */
.Card {
  width: 75vw;
  margin-left: 2.5%;
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 18vw;
  height: 200px;
  background: #ffffff;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  margin-left: 20px;
  margin-top: 25px;
}
.card-one {
  display: flex;
  height: 13vh;
}
.card_img {
  flex: 1.5;
}
.card_img img {
  width: 75%;
  height: 80%;
  margin-left: 15px;
  margin-top: 15px;
}
.card_name {
  flex: 3;
}
.card_name {
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  color: #191919;
  line-height: 90px;
  font-weight: 600;
}
.card_two {
  width: 90%;
  font-family: PingFangSC-Regular;
  font-size: 1vw;
  color: #707070;
  font-weight: 400;
  margin-left: 14px;
  margin-top: 10px;
}
.card_three {
  display: flex;
}
.card_three :nth-child(1),
.card_three :nth-child(2) {
  width: 40px;
  height: 20px;
  background: #ffd5d8;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #7f0001;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.card_three :nth-child(3),
.card_three :nth-child(4) {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #676767;
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
}
.card_three :nth-child(3) {
  margin-left: 5.5vw;
}
.card_three :nth-child(4) {
  margin-left: 1vw;
  margin-right: 1vw;
}
/* 分页数 */
.block {
  float: right;
  margin-right: 15vw;
}
</style>

<script>
import mixinsSample from "mixins/sample";

export default {
  data() {
    return {
      changeNav: 2,
      // 分页起始数
      startNum: 1,
      // 分页结束数
      endNum: 6,
      employee: [],
      navigator: [
        {
          id: 0,
          name: "机器人类",
          level: 1
        },
        {
          id: 1,
          name: "数据类",
          level: 1
        },
        {
          id: 2,
          name: "全部",
          level: 2,
          parentId: 0
        },
        {
          id: 3,
          name: "机器人",
          level: 2,
          parentId: 0
        },
        {
          id: 4,
          name: "数智应用APP",
          level: 2,
          parentId: 0
        },
        {
          id: 5,
          name: "数据查询",
          level: 2,
          parentId: 1
        },
        {
          id: 6,
          name: "数据录入",
          level: 2,
          parentId: 1
        },
        {
          id: 7,
          name: "数据设置",
          level: 2,
          parentId: 1
        },
        {
          id: 8,
          name: "数据恢复",
          level: 2,
          parentId: 1
        }
      ],
      employee_Cf: [
        {
          id: 0,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 1,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 2,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 3,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 4,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 5,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 6,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 7,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 8,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 9,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 10,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 11,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 12,
          ec_Classification: "数据采集",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 13,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 14,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 15,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 16,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        },
        {
          id: 17,
          ec_Classification: "数据采集员",
          ec_introduceL: "通过RPA进行数据采集通过RPA进行数据采集",
          ec_img: "assets/1备份.png",
          num: 3,
          btn1: "人口",
          btn2: "常用"
        }
      ]
    };
  },
  mixins: [mixinsSample],
  created() {
    var result = [];
    for (var i = 0, len = this.employee_Cf.length; i < len; i += 6) {
      result.push(this.employee_Cf.slice(i, i + 6));
    }
    this.employee = result[0];
  },
  methods: {
    changeborder(id) {
      this.changeNav = id;
    },
    // 跳转到机器人详情页面
    robotMsg(id) {
      this.$router.push({
        name: "robot",
        params: {
          id: id
        }
      });
    },
    // 点击上一页
    prevClick(e) {
      var result = [];
      for (var i = 0, len = this.employee_Cf.length; i < len; i += 6) {
        result.push(this.employee_Cf.slice(i, i + 6));
      }
      this.employee = result[e - 1];
    },
    // 点击下一页
    nextClick(e) {
      var result = [];
      for (var i = 0, len = this.employee_Cf.length; i < len; i += 6) {
        result.push(this.employee_Cf.slice(i, i + 6));
      }
      this.employee = result[e - 1];
    },
    handleCurrentChange(e) {
      var result = [];
      for (var i = 0, len = this.employee_Cf.length; i < len; i += 6) {
        result.push(this.employee_Cf.slice(i, i + 6));
      }
      this.employee = result[e - 1];
    }
  }
};
</script>