interface Parmas {
  [propName: string]: any;
}

export default {
  default: (value: string | Parmas) => {
    setTimeout(() => {
      console.log("上报成功");
    }, 2000);
  }
};
