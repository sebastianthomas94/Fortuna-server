var exp = require('express');
const router = exp.Router();
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

var user = require('../model/usersmodel');

 router.post("/",(req,res)=>{ console.log(req.body);
    user.find({username:req.body.username, password:req.body.password},(err,result)=>{
        if (err) throw err;
        else{
            console.log(result.length);
            if(result.length!=0)
                res.send({found:true})
                
            else
                res.send({found:false})
        }
    })
    
}) ;
 router.post("/data",(req,res)=>{ console.log(req.body);
	user.find({username:req.body.username},(err,result)=>{
		if (err) throw err;
		else{

            //console.log(result);
                res.send(result);
			}
    })
    
}) ;

 router.post("/data/wallet",(req,res)=>{
	 user.updateOne({username:req.body.username},{$set:{wallet:req.body.amount}},(err,result)=>{
		if (err) throw err;
		else{
			/* result.wallet=req.body.amount;
			console.log(req.body.amount); */
			//console.log("wallet updated"+result);
		} 
});
 });



module.exports = router;