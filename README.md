# @pangshq/trading_days

判断某一天是否为 A 股交易日。

基于 [chinese-days](https://github.com/vsme/chinese-days) 的中国节假日、调休数据，自动处理周末、法定节假日和调休补班。

## 安装

```bash
npm install @pangshq/trading_days
```

## 使用

```ts
import { isTradingDay, getTradingDayDetail } from '@pangshq/trading_days';

// 判断今天是否为交易日
isTradingDay(); // true | false

// 判断指定日期
isTradingDay('2025-10-01'); // false（国庆节）
isTradingDay('2025-05-12'); // true（周一）
isTradingDay('2025-05-10'); // false（周六）

// 支持多种日期类型
isTradingDay(new Date('2025-10-01'));       // Date 对象
isTradingDay(new Date('2025-10-01').getTime()); // 时间戳

// 获取日期详情
getTradingDayDetail('2025-10-01');
// { trading: false, name: 'National Day,国庆节,3', date: '2025-10-01' }

getTradingDayDetail('2025-05-12');
// { trading: true, name: 'Monday', date: '2025-05-12' }
```

## API

### `isTradingDay(date?)`

判断指定日期是否为 A 股交易日。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| date | `Date \| string \| number` | `new Date()` | 日期，支持 Date 对象、ISO 字符串、时间戳 |

返回 `boolean`。

### `getTradingDayDetail(date?)`

获取指定日期的详情。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| date | `Date \| string \| number` | `new Date()` | 日期，支持 Date 对象、ISO 字符串、时间戳 |

返回 `{ trading: boolean, name: string, date: string }`。

## 判断逻辑

1. 如果是周末（周六/周日），直接返回 `false`
2. 否则，查询 chinese-days 的中国节假日和调休数据：
   - 法定节假日 → 非交易日
   - 调休补班日 → 非交易日
   - 普通工作日 → 交易日
