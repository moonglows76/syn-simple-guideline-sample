<template>
  <div>
    <h1>シンプルなガイドラインのサンプルソース</h1>
    <!-- （優先度B）テンプレート内でのコンポーネント名の形式 -->
    <TodoItem :contents="contents" />
  </div>
</template>

<script setup>
const contents = [
  {
    id: "id001",
    status: "完了",
    title: "ハミガキ",
    date: 1692828779000,
  },
  {
    id: "id002",
    status: "作業中",
    title: "顔洗い",
    date: 1692829859000,
  },
  {
    id: "id003",
    status: "未作業",
    title: "朝ごはん",
    date: 1692833459000,
  },
];
</script>

<style lang="scss" scoped></style>
