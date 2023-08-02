import "vant/lib/index.css";
import Vue from "vue";
import { Button, Popup, Tag } from "vant";

const uiList = [Button, Popup, Tag];

uiList.forEach((item) => {
  Vue.use(item);
});
