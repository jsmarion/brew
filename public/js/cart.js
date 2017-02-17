
var currently_adding = {};
var cart_data = {};

var button_reset = function($btn, product_id){
	$btn.css({ transition: 'background .5s ease-in-out', background: '#cc7837'});
    setTimeout(function() {
      $btn.html("<i class='icon footprint'></i>Add Another");
      $btn.css('min-width', "").css('max-width', "");
      //CHANGES
      if(product_id) {
        in_progress_reset(product_id);
      }
      //END CHANGES
    }, 500);


};
var button_adding = function($btn){
	$btn.css({ transition: 'background 1s ease-in-out', background: 'yellowgreen'}).html("Adding...");
};
var button_success = function($btn){
	$btn.css({ transition: 'background 1s ease-in-out', background: 'green'}).html("Added");
};
var in_progress_reset = function(product_id){
  	currently_adding[product_id] = false;
};

var add_to_cart = function(sender){
  console.log("adding....");
  sender.preventDefault();
  var $trg = $(sender.target);
  var width = $trg.css('width');
  var product_id = $(sender.target).attr('data-ecom-id');

  // FB Pixel
  fbq(['track', 'AddToCart']);
  // Pinterest Pixel
  pintrk('track', 'addtocart');

  if (currently_adding[product_id] == true){
    return;
  }
  else{
    currently_adding[product_id] = true;
  }

  $trg.css('min-width', width);
  $trg.css('max-width', width);
  button_adding($trg);


  var add_callback = function(product_id){
    setTimeout(function() { button_success($trg) }, 1000);
    setTimeout(function() { button_reset($trg, product_id) }, 2000);
    jQuerySafe("#cart-slide").modal('show');
  };

  BBSafe.trigger("newProduct:add", product_id, add_callback);
};

(function() {
  $(document).on('click', '.ecom-add-to-cart', add_to_cart);
  //build_cart_from_data(true);
})();
