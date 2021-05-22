# formatted-string

Formatting a string based upon the object passed.

## Changes

### v2

- uses typescript
- throws syntax error if 

```
var str = formatted("{a} is {b}; {b} is {a}", {a:'red', b: 'blue'});

console.log(str);

// output
"red is blue; blue is red"
```

## License

MIT &copy; Anubhav Saini 2016
