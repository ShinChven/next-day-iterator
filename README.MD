# next-day-iterator

iterates date range day by day.

## Install

```bash
npm install next-day-iterator
```

## Usage

```typescript
nextDayIterator("2020-01-01", "2020-05-05", (start, end) => {
    console.log(start, end);
},"YYYY-MM-DD");
```

## Result

```text
2020-01-01 2020-01-02
2020-01-02 2020-01-03
2020-01-03 2020-01-04
2020-01-04 2020-01-05
...
```
