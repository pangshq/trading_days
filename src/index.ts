import chineseDays from 'chinese-days';
const { isWorkday, getDayDetail } = chineseDays;

export type DateInput = Date | string | number;

function isWeekend(date: DateInput = new Date()): boolean {
  const d = date instanceof Date ? date : new Date(date);
  return d.getDay() % 6 === 0;
}

export function isTradingDay(date: DateInput = new Date()): boolean {
  // 周末A股永远不开市，直接短路
  if (isWeekend(date)) return false;
  return isWorkday(date);
}

export function getTradingDayDetail(date: DateInput = new Date()) {
  const detail = getDayDetail(date);
  return {
    trading: detail.work,
    name: detail.name,
    date: detail.date,
  };
}
