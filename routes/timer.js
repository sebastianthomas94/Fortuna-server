var exp = require('express');
const router = exp.Router();


var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

	
	
	

    var time={minutes:1,seconds:0, cooldown:false, cooldownTime:20, dice:0 , diceStatus:false };// timer seting
	 
let timer=setInterval(counter,1000);
 function counter()								//Timer code_______
 {
	 
	 if (time.seconds<=0)
	 {
		 time.seconds=60;
		 time.minutes--;
	 }
	 
	 if(time.minutes<0)
	 {
		 time.cooldown=true;
		 if(!time.diceStatus)throwDice();
	 }
	 
	 if(time.cooldown)
	 {
		 if(time.cooldownTime<=0)
		 {
			 time={minutes:1,seconds:0, cooldown:false, cooldownTime:20, dice:0 , diceStatus:false};// timer seting
		 }
		 else
		 time.cooldownTime--;
	 }
	 else
		 time.seconds--;
 }
 
 function throwDice()
 {
	 time.dice= Math.floor((Math.random() * 3) + 1);
	 time.diceStatus=true;
 }


router.get("/",(req,res)=>{console.log(time);res.send(time);
  });




module.exports = router;