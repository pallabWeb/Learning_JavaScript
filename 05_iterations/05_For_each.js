const coding = ["js", "ts", "html", "css", "c++"];

coding.forEach(function (item) {
    console.log(item);
});

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})