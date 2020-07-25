var exp = require('express');
const router = exp.Router();
var data = require('../model/datamodel');
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

var user = require('../model/datamodel');


var d = new Date();
//var n = d.getTime();

router.post("/",(req,res)=>{
	req.body.date=d.toDateString();
	req.body.time=d.toLocaleTimeString ();
    var u1 = new data(req.body);
    u1.save((err)=>{
        if (err) throw err;
        else {res.send({msg:"data Created"}); console.log("______________data added________________"+u1)}
    })
});


 router.post("/get",(req,res)=>{ console.log(req.body);
	user.find({user:req.body.username},(err,result)=>{
		if (err) throw err;
		else{

            console.log(result);
                res.send(result);
			}
    })
    
}) ;

/*  router.get("/:uid",(req,res)=>{
    data.find({username:req.params.uid},(err,result)=>{
        if (err) throw err;
        else{
            console.log(result.length);
            if(result.length!=0)
                res.send({found:true})
                
            else
                res.send({found:false})
        }
    });
});  */
module.exports = router;