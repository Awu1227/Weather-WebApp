<template>
  <div id="realtime">
    <div class="line_left"></div>
    <div class="news_content">
      <h3>实时播报</h3>
      <div class="news" v-for="item in newsList" :key="item.id">
        <p class="yuan"></p>
        <p class="time">{{ item.time }}</p>
        <div class="news_title">
          <p>
            <a :href="item.link">{{ item.title }}</a>
          </p>
          <p><a :href="item.link">查看详细报道</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          time: '8月28日 8:30',
          title: '国防部回应美舰过航台湾海峡：东部战区全程跟监警戒',
          link: 'https://new.qq.com/omn/20210828/20210828A01T2S00.html',
        },
        {
          id: 2,
          time: '8月28日 9:00',
          title:
            '嚼槟榔致癌又上瘾，为何管不住？湖南将立法确定它为“地方特色产品',
          link: 'https://new.qq.com/omn/20210823/20210823A085CE00.html',
        },
        {
          id: 3,
          time: '8月28日 10:30',
          title: '十九大后五个落马“警虎”中，刘新云有个“特殊”之处',
          link: 'https://new.qq.com/omn/20210827/20210827A0FA2000.html',
        },
      ],
    }
  },
}
</script>

<style scoped>
#realtime {
  width: 90%;
  height: 581px;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  top: 28px;
  background-color: rgba(78, 145, 243, 0.76);
}
/*左侧连接线*/
.line_left {
  width: 478px;
  transform: rotate(90deg);
  position: absolute;
  left: -214px;
  top: 305px;
  border: 1px solid #ffffff;
}
/* 新闻内容 */
.news_content {
  width: 90%;
  height: 548px;
  position: absolute;
  top: 10px;
  left: 20px;
}
/*实时播报标题*/
.news_content h3 {
  width: 35%;
  height: 6%;
  color: #ffffff;
  font-weight: 600;
  font-size: 6vw;
}
/*新闻盒子*/
.news {
  width: 99%;
  height: 26.5%;
  margin-top: 6%;
  position: relative;
}
/*圆*/
.yuan {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  float: left;
}
/*7月22日 14:00*/
.time {
  width: 56%;
  height: 12%;
  color: #ffffff;
  font-weight: 500;
  font-size: 4.5vw;
  font-style: normal;
  position: absolute;
  top: -3%;
  left: 10%;
}
.news_title {
  width: 90%;
  height: 64%;
  border-radius: 20px;
  background-color: #d8d8d8;
  position: absolute;
  left: 6.5%;
  top: 20%;
}
.news_title p:nth-child(1) {
  width: 85%;
  font-weight: 500;
  font-size: 3.5vw;
  color: black;
  white-space: wrap;
  margin: 4px auto;
}
.news_title p:nth-child(2) {
  width: 85%;
  color: #898989;
  font-size: 2vw;
  margin: 0 auto;
}
</style>
