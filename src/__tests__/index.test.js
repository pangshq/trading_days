"use strict";
/// <reference types="jest" />
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('isTradingDay', () => {
    // Weekends
    it('returns false for Saturday', () => {
        expect((0, index_1.isTradingDay)('2025-05-10')).toBe(false); // Saturday
    });
    it('returns false for Sunday', () => {
        expect((0, index_1.isTradingDay)('2025-05-11')).toBe(false); // Sunday
    });
    // Normal workdays
    it('returns true for normal weekday', () => {
        expect((0, index_1.isTradingDay)('2025-05-12')).toBe(true); // Monday
    });
    // Holidays
    it('returns false for National Day', () => {
        expect((0, index_1.isTradingDay)('2025-10-01')).toBe(false);
    });
    it('returns false for Spring Festival', () => {
        expect((0, index_1.isTradingDay)('2025-01-29')).toBe(false);
    });
    it('returns false for New Year\'s Day', () => {
        expect((0, index_1.isTradingDay)('2025-01-01')).toBe(false);
    });
    // Date input types
    it('accepts Date object', () => {
        const d = new Date('2025-10-01');
        expect((0, index_1.isTradingDay)(d)).toBe(false);
    });
    it('accepts timestamp', () => {
        const ts = new Date('2025-10-01').getTime();
        expect((0, index_1.isTradingDay)(ts)).toBe(false);
    });
    it('defaults to today', () => {
        const result = (0, index_1.isTradingDay)();
        expect(typeof result).toBe('boolean');
    });
});
describe('getTradingDayDetail', () => {
    it('returns correct structure for workday', () => {
        const detail = (0, index_1.getTradingDayDetail)('2025-05-12');
        expect(detail).toEqual({
            trading: true,
            name: 'Monday',
            date: '2025-05-12',
        });
    });
    it('returns correct structure for holiday', () => {
        const detail = (0, index_1.getTradingDayDetail)('2025-10-01');
        expect(detail.trading).toBe(false);
        expect(detail.date).toBe('2025-10-01');
        expect(detail.name).toContain('National Day');
    });
    it('defaults to today', () => {
        const detail = (0, index_1.getTradingDayDetail)();
        expect(typeof detail.trading).toBe('boolean');
        expect(typeof detail.name).toBe('string');
        expect(typeof detail.date).toBe('string');
    });
});
