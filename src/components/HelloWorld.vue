<template>
  <div class="hello">
    <div class="top">
      {{ msg }}
    </div>
    <van-button @click="show = true">点我弹窗</van-button>
    <van-popup v-model="show" position="right" overlay-class="pop-overlay">
      <div class="pop">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import "@/style/components/HelloWorld.less";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
