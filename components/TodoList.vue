<template>
  <div class="todo-list">
    <!-- （優先度A）キー付きの v-for を使用する -->
    <ul class="todo-list__list">
      <li v-for="content in contents" :key="content.id" class="todo-list__item">
        <div class="todo-list__status">
          ステータス：<span
            class="todo-list__status-name"
            :class="statusClass(content.status)"
            >{{ content.status }}</span
          >
        </div>
        <div class="todo-list__title">内容：{{ content.title }}</div>
        <div class="todo-list__datetime">
          {{ useDateWithTime(content.date) }}
        </div>
      </li>
    </ul>

    <!-- （優先度A）v-for で v-if を避ける -->
    <!-- 1. リスト内の項目をフィルタリングするパターン（算出プロパティを利用） -->
    <!-- <ul>
      <li v-for="content in uncompletedContents" :key="content.id">
        <div>ステータス：{{ content.status }}</div>
        <div>内容：{{ content.title }}</div>
      </li>
    </ul> -->
    <!-- 2. 非表示にすべきリストをレンダリングしないようにするパターン -->
    <!-- <ul>
      <template v-for="content in contents" :key="content.id">
        <li v-if="content.status != '完了'">
          <div>ステータス：{{ content.status }}</div>
          <div>内容：{{ content.title }}</div>
        </li>
      </template>
    </ul> -->
  </div>
</template>

<script setup>
// （優先度A）詳細な props 定義を使用する
const props = defineProps({
  contents: Array,
});

const uncompletedContents = computed(() => {
  return props.contents.filter((content) => content.status != "完了");
});

const statusClass = (status) => {
  let className = "todo-list__status-name--red";
  switch (status) {
    case "完了":
      className = "todo-list__status-name--green";
      break;
    case "作業中":
      className = "todo-list__status-name--yellow";
      break;
    default:
      break;
  }
  return className;
};
</script>

<!-- （優先度A）コンポーネント・スコープのスタイリングを使用する -->
<style lang="scss" scoped>
// CSSのクラス名にBEMを利用します。
// コンポーネント内でもクラス名にBEMを利用します。
.todo-list {
  &__status {
    &-name {
      &--green {
        color: green;
      }

      &--yellow {
        color: goldenrod;
      }

      &--red {
        color: red;
      }
    }
  }
}
</style>
