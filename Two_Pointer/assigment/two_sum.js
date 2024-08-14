var solve =  (numbers, target)=> {
   let [i,j]= [0,numbers.length-1];
   while(i<j){
 const sum= numbers[i]+numbers[j];
 if(sum===target){
   return [i+1,j+1]
 }
 if(sum>target){
j--;
 }else{
    i++;
 }
    while(numbers[i-1]===numbers[i]){
         i++;
    };
    while(numbers[j+1]===numbers[j]){
         j--;
    }
   }
   return [];
};
console.log(solve([2,7,11,15],9))
