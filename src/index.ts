export default function formatted(fmt: string, obj: any): string {
    if (typeof fmt !== typeof '') {
        throw new TypeError('fmt should be string.');
    }
    const keys = fmt.match(/{[^}]*/g) || [''];
    const keyNames = keys?.map(function (x: any) {
        return x.split('{').pop().split('}').shift();
    });
    let res: string = fmt;
    keyNames.forEach(function (key: any) {
        const toReplace = new RegExp('{' + key + '}', 'g');
        res = res.replace(toReplace, obj[key]);
    });
    return res;
}
