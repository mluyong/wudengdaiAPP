<template>
<div>
<mt-swipe :auto="6000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  methods: {
  handleChange(index) {
  }
}
}
</script>

<style>
</style>
