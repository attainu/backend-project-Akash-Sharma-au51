const item = require('./order');
const new_order = new item([
    {
     "id": 1,
     "name": "wheat flour",
     "price ": 400,
     "in stock": 15,
     "qutanitytype": "kgs",
     "description": "chakki fresh wheatflour with low carbs"
    },
    {
     "id": 2,
     "name": "thoor daal",
     "price ": 150,
     "in stock": 20,
     "qutanitytype": "kgs",
     "description": "straigth from field quality checked"
    },
    {
     "id": 3,
     "name": "oil ",
     "price ": 200,
     "in stock": 20,
     "qutanitytype": "ltrs",
     "description": "pure refined sunflower oil "
    }
   ]);
   new_order.save((err,item)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("item added successfully");
        console.log(item)
    }
   });
