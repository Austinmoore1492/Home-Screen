const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus'),
      container = document.querySelector('.container');

//show time
function showTime(){
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
  
  //set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';
  
  //12hr format
  hour = hour % 12 || 12;
  
  //output Time
  time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}<span> </span> ${amPm}`;
  setTimeout(showTime, 1000);
}

//add zero
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


const morningPics = ['https://images.pexels.com/photos/1650830/pexels-photo-1650830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/750820/pexels-photo-750820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

const afternoonPics = ['https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1117403/pexels-photo-1117403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/580276/pexels-photo-580276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

const eveningPics = ['https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];


function setGreet(){
  const randMorningPic = morningPics[Math.floor(Math.random() * morningPics.length )];
  const randAfternoonPic = afternoonPics[Math.floor(Math.random() * afternoonPics.length )];
  const randEveningPic = eveningPics[Math.floor(Math.random() * eveningPics.length )]; 
 let today = new Date(),
      hour = today.getHours();  
  
  if(hour <= 11){
    //morning
    document.body.style.background = `url(${randMorningPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0))`;
    greeting.textContent = 'Good Moring';

  } else if(hour <= 16){
    //afternoon
    document.body.style.background = `url(${randAfternoonPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0))`;
    greeting.textContent = 'Good Afternoon'

  } else{
    //evening
    document.body.style.background = `url(${randEveningPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))`;
    greeting.textContent = 'Good Evening'
  }
}

showTime();
setGreet();
