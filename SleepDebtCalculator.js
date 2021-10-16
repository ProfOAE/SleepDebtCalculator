const getSleepHours = day =>{
    day = day.toUpperCase();
  
    // tenary statement to check correct input of day
    /*var answer ; // use if statement instead
    day === 'monday' || day ==='tuesday'|| day ==='wednesday' ||  day ==='thursday' || day === 'Friday' || day ==='saturday' || day ==='sunday'? answer = day: answer = console.log('Day of the week spelt wrongly!!!!') ;
    return answer;*/
   /*If (day === 'monday' || day ==='tuesday'|| day ==='wednesday' ||  day ==='thursday' || day === 'Friday' || day ==='saturday' || day === 'sunday' ){
     day = day;
   } else{
     return console.log(''Day of the week spelt wrongly.') ;
   };*/
  switch(day){
    case 'MONDAY':
    return 10;
    break;
  
    case 'TUESDAY':
    return 10;
    break;
  
    case 'WEDNESDAY':
    return 1;
    break;
  
    case 'THURSDAY':
    return 1;
    break;
  
    case 'FRIDAY':
    return 1;
    break;
    
    case 'SATURDAY':
    return 1;
    break;
    
    case 'SUNDAY':
    return 1
    ;
    break;
  
    default:
    return 'day of the week spelt wrong!!!';
    break;
  }
  
  };
  
  //Testing the function
  console.log(getSleepHours('monday'));
  console.log(getSleepHours('Sundanbhy'));
  console.log(getSleepHours('saturday'));
  
  console.log();
  console.log();
  
  // calculating the sleep hours
  const getActualSleepHours = () => getSleepHours('MONDAY') + getSleepHours('TUESDAY') + getSleepHours('WEDNESDAY') + getSleepHours('THURSDAY') + getSleepHours('FRIDAY') + getSleepHours('SATURDAY') + getSleepHours('SUNDAY');
  //return sum;
  
  
  getIdealSleepHours = () =>{
    var idealHours = 5;
    return idealHours * 7 //ideal hour for the week
  }
  console.log(`The ideal sleeping hours is ${getIdealSleepHours()}`);
  console.log(`The actual sleeping hours is ${getActualSleepHours()}`);
  
  const calculateSleepDebt = () =>  {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
   
    //Decsion time
    if (actualSleepHours===idealSleepHours){
    console.log('You got a perfect amount of sleep');
  } else if(actualSleepHours < idealSleepHours){
    var ans = idealSleepHours - actualSleepHours;
    console.log(`You got ${ans} hour(s) less sleep than you needed this week. You really have to rest`);
  } else  {
    console.log('You got more sleep than expected');
    }
  };
  console.log();
  
  calculateSleepDebt();
  
  console.log();
  console.log();
  console.log();
  
  console.log("Modified version");
  
  console.log();
  console.log();
  
  // Modification
  const getActualSleepHoursMod = () => 4 + 4 + 5 + 6 + 8 + 7;
  const getIdealSleepHoursMod = idealHours => idealHours * 7;
  
  const calculateSleepDebtMod = () =>  {
    var actualSleepHours = getActualSleepHoursMod();
    const idealSleepHours = getIdealSleepHoursMod(8);
   
    //Decsion time
    if (actualSleepHours===idealSleepHours){
    console.log('You got a perfect amount of sleep');
  } else if(actualSleepHours < idealSleepHours){
    var ans = idealSleepHours - actualSleepHours;
    console.log(`You got ${ans} hour(s) less sleep than you needed this week. You really have to rest`);
  } else  {
    console.log('You got more sleep than expected');
    }
  };
  calculateSleepDebtMod();