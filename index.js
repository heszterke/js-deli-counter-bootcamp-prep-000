var katzDeliLine = [];

var i=0

function takeANumber (katzDeliLine){
   i = i+ 1;
    katzDeliLine.push(i)
  return `Welcome. You are number ${i} .`;
}


function nowServing (katzDeliLine){
  if (katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
   return 'There is nobody waiting to be served!';
  }
}

function currentLine (katzDeliLine){

var katzDeliLinePeople = [];

for (var i=0; i<katzDeliLine.length; i++){
      katzDeliLinePeople.push(`${i+1}. ${katzDeliLine[i]}`);}
  if (katzDeliLine.length>0){
        return `The line is currently: ${katzDeliLinePeople.join(', ')}`;
  }
  else{
    return 'The line is currently empty.';
  }
}