//your JS code here. If required.
const timer = document.getElementById('timer')

function setTime(){
	const date = new Date()
	timer.innerText = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+", "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+(date.getHours()>12?"PM":"AM")
}
setInterval(()=>{
setTime()
},1000)