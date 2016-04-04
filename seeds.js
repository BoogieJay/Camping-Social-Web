var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name : "Dawn",
        image : "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name : "By the sea",
        image : "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name : "forest n Sunshine",
        image : "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg",
        description : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    }
    ];

function seedDB(){
    
    //Remove all campgrounds
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("remove campgrounds");
        }
        //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err,campground){
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             console.log("added a campground");
                    
        //             //create a new comment
        //             Comment.create(
        //                 {
        //                     text : "This is a fantasitic place, but it's only shown on the Internet",
        //                     author : "Catalyst"
        //                 },function(err,comment){
        //                     if(err){
        //                         console.log(err);
        //                     }
        //                     else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created a comment")
        //                     }
        //                 }
        //             )
        //         }
                
        //     })
        // })
    });
    
    
    
    //add  a few comments
}

module.exports = seedDB;

