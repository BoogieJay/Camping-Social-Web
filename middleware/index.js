var Campground = require("../models/campground")
var Comment = require("../models/comment")

//all middleware are here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please login first!!");
    res.redirect("/login");
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                req.flash("error", "Oh no...Comment not found!");
                res.redirect("back");
            }
            else{
                //check if the user own this campground
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "Ooops.....You don't have the permissoin to do so!");
                    res.redirect("back");
                }
            }
        })
    }
    else{
        req.flash("error", "Please login first!!");
        res.redirect("back");
    }
}

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Oh no...Campground not found!");
                res.redirect("back")
            }
            else{
                //check if the user own this campground
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "Ooops.....You don't have the permissoin to do so!");
                    res.redirect("back");
                }
            }
        })
    }
    else{
        req.flash("error", "Please login first!!");
        res.redirect("back");
    }
}

module.exports = middlewareObj;
