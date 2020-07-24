<style scoped lang="scss" src="./tester.scss"></style>
<script lang="ts" src="./tester.ts"></script>
<template>
  <div class="tester">
    <h1>tester</h1>

    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-if="text">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{text}}</div>
        <p
          class="text-gray-700 text-base"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#photography</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#travel</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >#winter</span>
      </div>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg" v-else>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Please add title</div>
      </div>
    </div>
  </div>
</template>