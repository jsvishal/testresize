$( document ).ready(function() {
    console.log( "ready!" );
    $(document).mouseover(function(e){
    	var elm = $(e.target);
    	elm.addClass("red-vv");
    }).mouseout(function(e){
    	var elm = $(e.target);
    	elm.removeClass("red-vv");
    })

    $(document).mouseup(function(e){
    	$(".elementClicked-vv").removeClass("elementClicked-vv");
    	var elm = $(e.target);
    	//elm.append(dom)
    	elm.addClass("elementClicked-vv").resizable({
		  
		});
    })
});