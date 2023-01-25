<template>
  <div>
    <!-- 把值赋予到标签 -->
    <h1>{{msg}}</h1>
    <h2>{{obj.name}}</h2>
    <h3>{{obj.age >=18?'成年了':'未成年'}}</h3>
  </div>
</template>

<script>
export default {
  //变量在data函数return的对象上
  data() {
    return {
      msg: "hello vue",
      obj: {
        name: "little vue",
        age: 5,
      },
    };
  },
};
</script>

<style>
</style>