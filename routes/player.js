const express = require('express')
const router = express.Router();
const fs = require('fs');

router.get('/:id',(req,res)=>{
  let image = 'D:/nodejs/zoneimages/images/'+req.params.id+'.png'
  var defaultt = 'D:/nodejs/zoneimages/images/default.png'

  if(fs.existsSync(image)){
    res.sendFile(image)
  }else {
    res.sendFile(defaultt)
  }
})

module.exports = router
