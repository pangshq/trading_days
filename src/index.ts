import { isWorkday, getDayDetail } from 'chinese-days';

type DateInput = Date | string | number;

/**
 * 判断是否为 周末
 * @param date 日期，默认为今天。支持 Date / 字符串 / 时间戳
 */
function isWeekend(date: DateInput = new Date()): boolean {
    const d = date instanceof Date ? date : new Date(date);
    return d.getDay() % 6 === 0;
}

/**
 * 判断是否为 A 股交易日
 * @param date 日期，默认为今天。支持 Date / 字符串 / 时间戳
 */
export function isTradingDay(date: DateInput = new Date()): boolean {
    // 添加周末判断逻辑，周末A股不开市
    if (isWeekend(date)) {  // 如果是周末，直接返回 false       
        return false;
    }
    return isWorkday(date);
}

/**
 * 获取日期详情
 * @param date 日期，默认为今天
 */
export function getTradingDayDetail(date: DateInput = new Date()) {
  const detail = getDayDetail(date);
  return {
    trading: detail.work,
    name: detail.name,
    date: detail.date,
  };
}
