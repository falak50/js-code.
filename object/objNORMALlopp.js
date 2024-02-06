let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}
const arr=Object.keys(marks);
for(let i=0;i<arr.length;i++){
    console.log(`keys => ${arr[i]} valueOFkey => ${marks[arr[i]]} `)
}