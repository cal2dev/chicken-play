$(function(){
	
	/* 
		Filter table by page refresh.
		
		IMPORTANT: Set a global Javascript variable BASE_URL in the head tag of the document. This should hold the url to which the page will be redirected.
		The trigger should have class set to 'filter-by-refresh' and data attribute 'data-target' set to GET parameter that will be suffixed to the redirected URL. 
	*/
	$('.filter-by-refresh').change(function(){
		var trigger = $(this);
		var filter = trigger.val();
		(filter == '-1') ? window.location = BASE_URL : window.location = BASE_URL+'?'+filter;
	});
	
	
	/* 
		Filter table by toggle.
		
		The trigger should have class set to 'filter-by-toggle' and each option's values should be set to the classname of the rows it should show (without the dot prefix). 
		All other rows will be hidden. 
		To reset the filter, set the default option to value -1.
	*/
	$('.filter-by-toggle').change(function(){
		var trigger = $(this);
		var target = $(trigger.attr('data-target'));
		var filter = trigger.val();
		var matched_rows = 0;
		
		if(filter==-1){
			target.find('tr').removeClass('hidden');
		}
		else{
			$.each(target.find('tbody > tr'),function(i){
				if($(this).hasClass(filter)){ 
					$(this).removeClass('hidden'); 
					matched_rows++; 
				} 
				else{ 
					$(this).addClass('hidden');
				}
			});
		}
	});
    
    
  
	

	/* 
		Toggle all checkboxes in a table.
		
		The trigger should have class set to 'toggle-all' and each target should have class set to 'toggle-all-target' 
	*/
	$('input[type="checkbox"].toggle-all').change(function(){
		var trigger = $(this);
		var targets = trigger.parents('table').find('.toggle-all-target');
		if(trigger.is(':checked')){
			$.each(targets,function(i){ $(this).prop('checked',true); });
		}
		else{
			$.each(targets,function(i){ $(this).prop('checked',false); });
		}
	});
	 
	
	/* 
		Apply Filter/Sort
	*/
	$('.apply-filter-sort').click(function(){
		var filter = $('.status-filter').val();
		var sorting = $('.order-sort').val();
		window.location = BASE_URL+'?'+filter+'&'+sorting;
	});
	
	/*
		Change multiple orders status modal
		
		Checks if any of the orders in the table have been selected. If not, displays an alert message. 
	*/
	$('#modal-change-status').on('show.bs.modal', function (e) {
		if($('.toggle-all-target').length && !$('.toggle-all-target:checked').length){
			alert('Please select atleast one order to update.');
			$(this).modal('hide');
			return false;
		}
	});
         $('#scan-sku').submit(function(){ return false; });
         
                      
        $('#sku').focus().bind('keypress', function(e) { 
            var code = e.keyCode || e.which;
                if(code == 13) {
                  var str = $(this).val(); 
                  var res = str.split('%'); 
                  var sku = res[0];
                  var weight =res[1];  
               //var return_sku =  document.getElementById("returned_sku").value; 
               // var return_weight =  document.getElementById("returned_weight").value;  
               //alert(return_sku); 
                         $('#return_value > tbody  > tr').each(function()  
                         { 
                           var return_sku =  document.getElementById("returned_sku").value;      
                           var return_weight =  document.getElementById("returned_weight").value;  
                var current_sku = return_sku+'%'+return_weight;
                     if(str == current_sku){
                        var img =  document.getElementById("div_imagetranscrits");
                 img.style.visibility = 'visible';  
                      } else{
                          alert('please enter correct sku');
                      }     
                  /* $.ajax({
         type: "POST",
         url:  "http://brownapron.com/ba/order/get_returned_orders"+'/'+sku+'/'+weight, 
         dataType: "text",  
         cache:false,
         success: 
              function(data){
                  //alert(data);
                if(data == 'failed'){
                    alert("please enter correct sku");
                }else{
              var img =  document.getElementById("div_imagetranscrits");
                 img.style.visibility = 'visible';
                }
              }
          });  */
           
     return false; 
    
     }); 
         }         
           
            
        });
        
   
       $('#dump_items').click(function(){ 
       var sku =  document.getElementById("returned_sku").value;      
   var weight =  document.getElementById("returned_weight").value; 
   var datastring = $("#dump_items-form").serialize();   
    $.ajax({
        
         type: "POST",
         url:  "http://brownapron.com/ba/order/dumped_items"+'/'+sku+'/'+weight, 
         data: datastring,
         dataType: "text",  
         cache:false,
         success: 
              function(data){
                alert(data);  //as a debugging message.  
              }
          });
     return false;
       
     });
     
    $('#accept_inventory').click(function(){ 
       var sku =  document.getElementById("returned_sku").value;      
       var weight =  document.getElementById("returned_weight").value;   
    $.ajax({
         type: "POST",
         url:  "http://brownapron.com/ba/order/update_inventory"+'/'+sku+'/'+weight, 
         data: {textbox: $("#textbox").val()},
         dataType: "text",  
         cache:false,
         success: 
              function(data){
                alert(data);  //as a debugging message. 
              }
          });
     return false;
       
     });
     
     
       /* jQuery UI - Datepicker */
    $(".datepicker").datepicker();
    
});  
