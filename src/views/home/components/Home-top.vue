<template>
  <div class="header">
    <svg
      t="1631266724738"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2520"
      width="16"
      height="16"
    >
      <path
        d="M882.59 269.18a402.3 402.3 0 1 0-739.38 317.33c25 57.25 90.4 142.8 194.43 254.26 76 81.44 144 146 146.84 148.71a40 40 0 0 0 55.06 0c0.7-0.66 70.49-67 146.21-148.09 103.62-110.93 168.92-196 194.08-252.69a403.34 403.34 0 0 0 2.76-319.5zM806.7 556.25C767.76 644 600.39 818.27 512 904.86 423.24 818 255.15 643 216.53 554.51a319.92 319.92 0 0 1-26.74-128.76c0-177.67 144.54-322.21 322.21-322.21s322.21 144.55 322.21 322.21a319.79 319.79 0 0 1-27.51 130.5z"
        fill="#7B808B"
        p-id="2521"
      ></path>
      <path
        d="M518.54 235.23c-85.65 0-155.32 69.68-155.32 155.32s69.68 155.32 155.32 155.32 155.33-69.67 155.33-155.32-69.68-155.32-155.33-155.32z m0 230.65a75.32 75.32 0 1 1 75.32-75.32 75.41 75.41 0 0 1-75.32 75.31zM689.68 193.57A289.83 289.83 0 0 0 508.17 130a15 15 0 0 0 0 30c121.26 0 225.64 82.27 253.83 200a15 15 0 1 0 29.18-7 292.33 292.33 0 0 0-101.5-159.43z"
        fill="#7B808B"
        p-id="2522"
      ></path>
      <path
        d="M784.16 419.77m-15 0a15 15 0 1 0 30 0 15 15 0 1 0-30 0Z"
        fill="#7B808B"
        p-id="2523"
      ></path>
    </svg>
    <router-link to="/search"
      ><div class="city">{{ this.$store.state.city }}</div></router-link
    >
    <span>刚刚更新</span>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.header {
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  font-size: 1.2rem;
  color: #fff;
}
.city {
  margin-left: 0.5rem;
}
span {
  position: absolute;
  right: 1rem;
  font-size: 0.5rem;
  color: #fff;
}
</style>
