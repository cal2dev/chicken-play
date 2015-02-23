
// Create an application module for cuts
var cutApp = angular.module( "CutApp", [] );
var controllers={};
controllers.cutFunction=function($scope) { 
var initializing = false;
var red_color = '#FFA098';
var green_color = '#9FFC69';

// Initials
var INVENTORY_QUANTITY=50;
var AVG_CHICKEN_WEIGHT=1500;
var INVENTORY_WEIGHT = AVG_CHICKEN_WEIGHT * INVENTORY_QUANTITY;
var CONSUMPTION_WEIGHT=0;
var CONSUMPTION_QUANTITY=0;

  $scope.cut1 = {inventory:2, 
				 cutName:'Cut1',  
				 qty:2 , 
				 demand:0 ,  
				 weight:0 ,  
				 pieces:{chicken_with_skin_8:{percent:100,piece_per_cut:1,piece_sub_cuts:'cut1,cut2'} } , 
				 color : {'background-color':green_color}};
				 
  $scope.cut2 = {inventory:2, 
				 cutName:'Cut2',  
				 qty:2 , 
				 demand:0 , 
				 weight:0 ,  				 
				 pieces:{chicken_with_skin_16:{percent:100,piece_per_cut:1,piece_sub_cuts:''} } ,
				 color : {'background-color':green_color}};
				 
  $scope.cut3 = {inventory:2, 
					cutName:'Cut3',  
					qty:2 , 
					demand:0 ,  
					weight:0 ,   
					pieces:{chicken_with_skin_32:{percent:100,piece_per_cut:1,piece_sub_cuts:''} } , 
					color:{'background-color':green_color}};

function skuWeights(cut_name,input_weight,qty){
	var result={};
	var new_weight=0;
	var tem_arr=$scope.$eval(cut_name).pieces;
	//alert(tem_arr['pieces']);
	if(tem_arr){
	
		for (var piece in tem_arr) {
			//console.log(piece);
			var val_arr = tem_arr[piece];
			var pc=val_arr.percent;
			 new_weight =getPercent(pc,input_weight);
			var sub=val_arr.piece_sub_cuts;
			if(sub){
			var sub_arr = sub.split(",");
				for (var sub_cut in sub_arr) {
				
				}
			}
		}
		$scope.$eval(cut_name).weight=new_weight;
	}
	
	//return  result; 
}
function getPercent(pc,input_weight){
var count1 = pc * input_weight;
var count2 = count1 / 100;
	return count2;
}

 // Cut1 code 
	$scope.$watch('cut1', function(newValue) {
	  cut1();
	},true);
	
	function cut1(quantity,weight){
		console.log("in cut1" ); 
		var input_weight=0;
		var input_qty=$scope.cut1.qty;
		var input_demand=$scope.cut1.demand;
		//alert(input_demand);
		if(!weight){
			input_weight=AVG_CHICKEN_WEIGHT * input_qty  ;
		}else{
			input_weight=weight  ;
		}
		
		skuWeights('cut1',input_weight,input_qty);
		
		if(input_demand > input_qty){ 
		$scope.cut1.color={'background-color':red_color};
		}else{
		$scope.cut1.color={'background-color':green_color};
		}
	}	
	
	// Cut2 code 
	$scope.$watch('cut2', function(newValue) {
	  cut2();
	},true);
	
	function cut2(quantity,weight){
		console.log("in cut2" ); 
		var input_weight=0;
		var input_qty=$scope.cut2.qty;
		var input_demand=$scope.cut2.demand;
		
		if(!weight){
			input_weight=AVG_CHICKEN_WEIGHT * input_qty  ;
		}else{
			input_weight=weight  ;
		}
		//$scope.cut2.weight=input_weight;
	}	
	
	// Cut3 code 
	 $scope.$watch('cut3', function(newValue) {
	  cut3();
	},true);
	
	function cut3(quantity,weight){
		console.log("in cut3" ); 
		var input_weight=0;
		var input_qty=$scope.cut3.qty;
		var input_demand=$scope.cut3.demand;
		
		
		if(!weight){
			input_weight=AVG_CHICKEN_WEIGHT * input_qty  ;
		}else{
			input_weight=weight  ;
		}
	//	$scope.cut3.weight=input_weight;
	}	 
	
}
cutApp.controller(controllers, []);