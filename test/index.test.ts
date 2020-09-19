// @ts-ignore
import assert from 'assert';

// @ts-ignore
import {nextDayIterator, nextDayIteratorAsync} from "../src/";
// @ts-ignore
import moment = require('moment');

describe('test:next-day-iterator', () => {
    it('nextDayIterator', (done) => {
        let last;
        nextDayIterator("2020-01-01", "2020-01-05", (start, end) => {
            console.log(start, end);
            if (typeof last === 'string' && last.length > 0) {
                assert.ok(last === start); // 验证前后两次遍历的日期首尾相接。
            }
            last = end;
            assert.ok(moment(end).diff(moment(start), 'days') === 1) // 验证开始结束日期差1天。
        });
        done()
    }).timeout(60 * 1000);


    it('nextDayIteratorAsync', (done) => {
        let last;
        // @ts-ignore
        nextDayIteratorAsync("2020-01-11", "2020-05-05", async (start, end) => {
            if (typeof last === 'string' && last.length > 0) {
                assert.ok(last === start); // 验证前后两次遍历的日期首尾相接。
            }
            last = end;
            assert.ok(moment(end).diff(moment(start), 'days') === 1) // 验证开始结束日期差1天。
        }).then(() => done());
    }).timeout(60 * 1000);
});
