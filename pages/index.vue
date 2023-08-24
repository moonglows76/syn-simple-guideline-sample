<template>
  <div>
    <h1>シンプルなガイドラインのサンプルソース</h1>
    <TodoItem :contents="contents" />
  </div>
</template>

<script setup>
const contents = [
  {
    id: "id001",
    status: "完了",
    title: "ハミガキ",
  },
  {
    id: "id002",
    status: "作業中",
    title: "顔洗い",
  },
  {
    id: "id003",
    status: "未作業",
    title: "朝ごはん",
  },
];
</script>

<style lang="scss" scoped></style>
