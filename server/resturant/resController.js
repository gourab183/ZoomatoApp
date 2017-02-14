let Resturant = require('./resturantEntity.js');

    let resCtrl = {
        // Get all resturants from the Database
        Getresturant: function(req, res){
            Resturant.find({}, function(err, resturants){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, resturant: resturants});
            });
        },
        //Post a resturant into Database
        Postresturant: function(req, res){
          console.log(req.body);
            let resturant = new Resturant(req.body);
            resturant.save(function(err){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message: "resturant Saved!!"});
            });
        },
        //Updating a resturant status based on an ID
        Updateresturant: function(req, res){
            let comments = req.body.comments;
            console.log(comments);
            Resturant.findById(req.params.id, function(err,rest){
              rest.comments = comments;
              rest.save(function(){
                if(err) {
                  res.json({status: false, error: "Status not updated"});
                }
                res.json({status: true, message: "Status updated successfully"});
              });
            });
        },
        // Deleting a resturant baed on an ID
        Deleteresturant: function(req, res){
          Resturant.remove({_id: req.params.id}, function(err){
            if(err) {
              res.json({status: false, error: "Deleting resturant is not successfull"});
              return;
            }
            res.json({status: true, message: "resturant deleted successfully!!"});
          });
        }
    }

module.exports = resCtrl;