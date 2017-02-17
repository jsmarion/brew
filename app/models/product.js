/**
 * Created by johns on 12/29/2016.
 */

// app/models/product.js

// grab the mongoose module
var mongoose = require('mongoose');


// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Product', {
    name : {type : String, default: ''},
    image : {type : String, default: ''},
    single_purchasable : {type : String, default: ''},
    description : {type : String, default: ''},
    unit_price : {type : Number, default: ''},
    product_id : {type : String, default: ''}
});
