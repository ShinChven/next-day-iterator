import moment from "moment";

interface IteratorFnAsync {
    (day1: string, day2: string): Promise<void>;
}

interface IteratorFn {
    (day1: string, day2: string): void;
}

/**
 * iterates date range day by day async.
 *
 * @param startDate
 * @param endDate
 * @param iterator
 * @param dateFormat
 */
export async function nextDayIteratorAsync(startDate: string, endDate: string, iterator: IteratorFnAsync, dateFormat = 'YYYY-MM-DD') {
    const start = moment(startDate);
    const end = moment(endDate);
    const days = end.diff(start, 'days');
    for (let i = 1; i <= days; i++) {
        const day1 = start.format(dateFormat || 'YYYY-MM-DD');
        const day2 = start.add(1, 'days').format(dateFormat);
        await iterator(day1, day2);
    }
    return Promise.resolve();
}

/**
 * iterates date range day by day sync.
 *
 * @param startDate
 * @param endDate
 * @param iterator
 * @param dateFormat
 */
export function nextDayIterator(startDate: string, endDate: string, iterator: IteratorFn, dateFormat = 'YYYY-MM-DD') {
    const start = moment(startDate);
    const end = moment(endDate);
    const days = end.diff(start, 'days');
    for (let i = 1; i <= days; i++) {
        const day1 = start.format(dateFormat || 'YYYY-MM-DD');
        const day2 = start.add(1, 'days').format(dateFormat);
        iterator(day1, day2);
    }
}
