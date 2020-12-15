let grades:number[] =[5,8,10,9,3.5];
let sum:number=0;
for(let i:number=0;i<grades.length;i++){
    sum+=grades[i];
}
console.log("sum="+sum);
if(grades.length>0){
    let avg:number=sum/grades.length;
    console.log("avrage grade ="+avg);
}