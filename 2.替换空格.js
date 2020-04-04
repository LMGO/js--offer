/*请实现一个函数，将一个字符串中的空格替换成“%20”。例如，
当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。*/

//去除字符串内所有的空格：str = str.replace(/\s/g,"");
str = "We Are Happy";
function replacestr(str) {
    // str = str.replace(/\s/g, '%20');
    // return str;
    return str.replace(/\s/g, '%20');
}
console.log(replacestr(str));

//参考资料：https://www.runoob.com/js/js-regexp.html