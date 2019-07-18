const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus'),
      container = document.querySelector('.container');


name.addEventListener('blur', () => getName(userName));
focus.addEventListener('blur', () => getFocus(userFocus));

//Get Users name and focus from local storage
let userName = JSON.parse(localStorage.getItem("userName")) || [];
let userFocus = JSON.parse(localStorage.getItem("userFocus")) || [];

//Show Users name 
function showUserName(userName) {
  name.focus();
  name.innerHTML = userName;
}

function getName(userName){
  userName.pop();
  userName.push(name.innerText);
  localStorage.setItem("userName", JSON.stringify(userName));
}

//Show Users foucs
function showUserFocus(userFocus) {
  focus.innerHTML = userFocus
}

//Get Users focus
function getFocus(userFocus){
  userFocus.pop();
  userFocus.push(focus.innerText);
  localStorage.setItem("userFocus", JSON.stringify(userFocus));
}

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
    document.body.style.background = `url(${randMorningPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0),rgba(0,0,0,0.9))`;
    greeting.textContent = 'Good Morning';

  } else if(hour <= 16){
    //afternoon
    document.body.style.background = `url(${randAfternoonPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0),rgba(0,0,0,0.9))`;
    greeting.textContent = 'Good Afternoon'

  } else{
    //evening
    document.body.style.background = `url(${randEveningPic}) no-repeat center center / cover, linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0),rgba(0,0,0,0.8))`;
    greeting.textContent = 'Good Evening'
  }
}

showUserName(userName)
showUserFocus(userFocus)
showTime();
setGreet();
