function saturdayFun(string="roller-skate"){
  return ( `This Saturday, I want to ${string}!`);
}
//saturdayFun("bathe my dog");

/*function mondayWork(string="go to the office"){
    return (`This Monday, I will ${string}.`);
}
//mondayWork("work from home");


*/
const mondayWork = function(string="go to the office"){
  
  return (`This Monday, I will ${string}.`);
};



function wrapAdjective(flare="*") {
    return function (string="special") {
      return `You are ${flare}${string}${flare}!`

    }   
    
}