<template>
  <div class="home">
    <div class="picture"></div>
    <div class="vipcenter">
      会员中心
      <i class="icon-iconfontright"></i>
    </div>
    <div id="rectangle">
      <h1>开通会员</h1>
      <h2>立享个性定制保存、无广告、各类天气预报等11项权限</h2>
    </div>
    <div class="circle1" style="float: left"></div>
    <div id="one">好评鼓励</div>
    <div class="circle2" style="float: left"></div>
    <div id="two">意见反馈</div>
    <div class="circle3" style="float: left"></div>
    <div id="three">帮助</div>
    <div class="circle4" style="float: left"></div>
    <div id="four">关于我们</div>
    <br />

    <div class="circle5" style="float: left"></div>
    <p>分享得超级会员</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.home {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #4887e2 !important;
}
#rectangle {
  width: 525px;
  height: 95px;
  position: absolute;
  top: 276px;
  left: 55px;
  border-radius: 30px;
  background-color: #d8d8d8;
}
h1 {
  width: 96px;
  height: 35px;
  position: absolute;
  top: 15px;
  left: 42px;
  font-family: 'SourceHanSansSC';
  color: #000000;
  font-weight: 400px;
  font-size: 24px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
h2 {
  width: 434px;
  height: 26px;
  position: absolute;
  top: 50px;
  left: 42px;
  font-family: 'SourceHanSansSC';
  color: #000000;
  font-weight: 400px;
  font-size: 18px;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
.picture {
  width: 100px;
  height: 100px;
  top: 84px;
  left: 60px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50px;
}
.vipcenter {
  text-align: left;
  text-decoration: none;
  font-family: 'SourceHanSansSC';
  color: #ffffff;
  font-weight: 400px;
  font-style: normal;
  font-size: 36px;
  position: absolute;
  top: 108px;
  left: 190px;
  width: 144px;
  height: 52px;
  border: none;
}
.icon-iconfontright {
  font-size: 55px;
  top: -15px;
  left: 300px;
  position: absolute;
}
#one {
  width: 200px;
  height: 43px;
  position: absolute;
  top: 481px;
  left: 207px;
  font-family: 'SourceHanSansSC';
  color: #ededed;
  font-weight: 400px;
  font-size: 30px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
#two {
  width: 200px;
  height: 43px;
  position: absolute;
  top: 582px;
  left: 207px;
  font-family: 'SourceHanSansSC';
  color: #ededed;
  font-weight: 400px;
  font-size: 30px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
#three {
  width: 121px;
  height: 43px;
  position: absolute;
  top: 779px;
  left: 207px;
  font-family: 'SourceHanSansSC';
  color: #ededed;
  font-weight: 400px;
  font-size: 30px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
#four {
  width: 200px;
  height: 43px;
  position: absolute;
  top: 682px;
  left: 207px;
  font-family: 'SourceHanSansSC';
  color: #ededed;
  font-weight: 400px;
  font-size: 30px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
.circle1 {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 482px;
  left: 97px;
  background-color: #d8d8d8;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.circle2 {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 582px;
  left: 97px;
  background-color: #d8d8d8;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.circle3 {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 682px;
  left: 97px;
  background-color: #d8d8d8;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.circle4 {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 782px;
  left: 97px;
  background-color: #d8d8d8;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.circle5 {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1100px;
  left: 137px;
  background-color: #d8d8d8;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
p {
  width: 332px;
  height: 43px;
  position: absolute;
  top: 1097px;
  left: 207px;
  font-family: 'SourceHanSansSC';
  color: #ededed;
  font-weight: 400px;
  font-size: 30px;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
</style>
