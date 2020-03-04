/**
 * 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */

function flatUnduplicateAscend(arr = [10, 10, 11, 10, 3, 100, [1, 2, 3, 4, 4, 5], 1, 2, 3, 4, 5, 6]) {
    if (Object.prototype.toString.call([]) !== '[object Array]') return arr


}