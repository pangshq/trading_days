"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTradingDay = isTradingDay;
exports.getTradingDayDetail = getTradingDayDetail;
const chinese_days_1 = require("chinese-days");
/**
 * 判断是否为 周末
 * @param date 日期，默认为今天。支持 Date / 字符串 / 时间戳
 */
function isWeekend(date = new Date()) {
    const d = date instanceof Date ? date : new Date(date);
    return d.getDay() % 6 === 0;
}
/**
 * 判断是否为 A 股交易日
 * @param date 日期，默认为今天。支持 Date / 字符串 / 时间戳
 */
function isTradingDay(date = new Date()) {
    // 添加周末判断逻辑，周末A股不开市
    if (isWeekend(date)) { // 如果是周末，直接返回 false       
        return false;
    }
    return (0, chinese_days_1.isWorkday)(date);
}
/**
 * 获取日期详情
 * @param date 日期，默认为今天
 */
function getTradingDayDetail(date = new Date()) {
    const detail = (0, chinese_days_1.getDayDetail)(date);
    return {
        trading: detail.work,
        name: detail.name,
        date: detail.date,
    };
}
