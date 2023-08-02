import "vant/lib/index.css";
import Vue from "vue";
import { Button, Popup } from "vant";

const uiList = [Button, Popup];

uiList.forEach((item) => {
  Vue.use(item);
});
