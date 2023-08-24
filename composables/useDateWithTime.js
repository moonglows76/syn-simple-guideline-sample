// 日付のフォーマットを行うコンポーザブル
export function useDateWithTime(text) {
  return useDateFormat(text, "YYYY年M月D日 HH:mm").value;
}
