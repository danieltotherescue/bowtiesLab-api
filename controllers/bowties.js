var Bowties = require('../models/Bowties');

 module.exports = {
  index: index,
  update: update,
  create: create,
  show: show,
  destroy: destroy
 }

 function index(req, res, next){
   Bowties.find({}, function(err, bowties){
     if(err) next(err);
     res.json(bowties)
   });
   console.log('You got this far!');
 }


function show(req, res, next) {
  Bowties.findOne({id:req.params.id}, function(err, savedBowtie) {
    if (err) next(err);

    res.json(savedBowtie);
  });
}

function create(req, res, next) {
  var Bowtie = new Bowties(req.body);
  console.log('Brand new Bowtie', req.body);

  Bowtie.save(function(err, savedBowtie){
    if(err) next(err);
    res.json(savedBowtie)

  })
}

function update(req, res, next) {
  var id = req.params.id;
  console.log("You have updated your bowtie");

  Bowties.findOne({id:id}, function(err, bowtie){
    if(err || !bowtie) next(err);

    if (req.body.material) bowtie.material = req.body.material;
    if (req.body.pattern) bowtie.pattern = req.body.pattern;
    if (req.body.style) bowtie.style = req.body.style;
    if (req.body.img_url) bowtie.img_url = req.body.img_url;
    if (req.body.retail_price) bowtie.retail_price = req.body.retail_price;
    if (req.body.description) bowtie.description = req.body.description;


    bowtie.save(function(err, updatedBowtie){
      if(err) next(err);
      res.json(updatedBowtie)
    })
  })
}

function destroy(req, res, next) {
  var id = req.params.id;
  console.log("Say goodbye to your bowtie", id);

  Bowties.remove({id:id}, function(err) {

    if (err) next(err);

    // If it's a successful delete
    res.json({msg: "Your bowtie has been deleted, good sir or madam."});
  });
};
