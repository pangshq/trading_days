type DateInput = Date | string | number;
/**
 * 判断是否为 A 股交易日
 * @param date 日期，默认为今天。支持 Date / 字符串 / 时间戳
 */
export declare function isTradingDay(date?: DateInput): boolean;
/**
 * 获取日期详情
 * @param date 日期，默认为今天
 */
export declare function getTradingDayDetail(date?: DateInput): {
    trading: boolean;
    name: string;
    date: string;
};
export {};
