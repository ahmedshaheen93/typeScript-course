let names:string[] =["ahmed","ibraheem","yousef","omnia"];
//ordinary for
console.log("------------------------");
console.log("ordinary for");
console.log("------------------------");
for(let i:number=0;i<names.length;i++){
    console.log(names[i]);
}

//arrays is dynamic like arrayList in java
names.push("retage");
names.push("moaaz");
// enhanced for
console.log("------------------------");
console.log("enhanced for");
console.log("------------------------");
for(let name of names){
    console.log(name);
}