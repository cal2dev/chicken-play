
// Create an application module for cuts
var cutApp = angular.module( "CutApp", [] );
var controllers={};
controllers.cutFunction=function($scope) { 
var initializing = false;
var red_color = '#FFE4E4';
var green_color = '#CCFFAE';

// Initials
var INVENTORY_QUANTITY=100;
var AVG_CHICKEN_WEIGHT=1500;
var INVENTORY_WEIGHT = AVG_CHICKEN_WEIGHT * INVENTORY_QUANTITY;
var CONSUMPTION_WEIGHT=0;
var CONSUMPTION_QUANTITY=0;


$scope.chicken_with_skin = {sub_cuts:'cut1,cut2,cut3,cut4,cut8', // parent Property
							max_qty:INVENTORY_QUANTITY, // parent Property
							max_weight:INVENTORY_WEIGHT,  // parent Property
							qty:INVENTORY_QUANTITY,
							weight:INVENTORY_WEIGHT
							}; 

$scope.w_cut1 = {qty:0,demand:10};							
$scope.cut1 = { parent:'chicken_with_skin',
				pieces:'chicken_with_skin_8',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};

//if the piece doesnt cut in sub cuts it doesnt require parent properties its optional				
$scope.chicken_with_skin_8 = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1}; 

// cut2
$scope.w_cut2 = {qty:0,demand:20};							
$scope.cut2 = { parent:'chicken_with_skin',
				pieces:'chicken_with_skin_16',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_with_skin_16 = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1}; 

// cut3
$scope.w_cut3 = {qty:0,demand:2};							
$scope.cut3 = { parent:'chicken_with_skin',
				pieces:'chicken_with_skin_32',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_with_skin_32 = { sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1}; 

// cut4
$scope.w_cut4 = {qty:0,demand:42};							
$scope.cut4 = { parent:'chicken_with_skin',
				pieces:'chicken_without_skin,cut4_skin',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_without_skin = { sub_cuts:'cut5,cut6,cut7',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:90,piece_per_cut:1}; 
$scope.cut4_skin = { sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:10,piece_per_cut:1};
// cut5
$scope.w_cut5 = {qty:0,demand:42};							
$scope.cut5 = { parent:'chicken_without_skin',
				pieces:'chicken_without_skin_8',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_without_skin_8 = { sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1};

// cut6
$scope.w_cut6 = {qty:0,demand:42};							
$scope.cut6 = { parent:'chicken_without_skin',
				pieces:'chicken_without_skin_16',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_without_skin_16 = { sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1};

// cut7
$scope.w_cut7 = {qty:0,demand:42};							
$scope.cut7 = { parent:'chicken_without_skin',
				pieces:'chicken_without_skin_32',
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.chicken_without_skin_32 = { sub_cuts:'',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:100,piece_per_cut:1};

// cut8
$scope.w_cut8 = {qty:0,demand:42};							
$scope.cut8 = { parent:'chicken_with_skin',
				pieces:'breast,wings,curry_cut,leg' ,  
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
$scope.breast = { sub_cuts:'cut9',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:39,piece_per_cut:2};
$scope.wings = { sub_cuts:'cut11',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:11,piece_per_cut:1};
$scope.curry_cut = { sub_cuts:'cut19',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:16,piece_per_cut:1};
$scope.leg = { sub_cuts:'cut12,cut13',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:34,piece_per_cut:2};		

// cut9
$scope.w_cut9 = {qty:0,demand:42};							
$scope.cut9 = { parent:'breast',
				pieces:'breast_cut,cut9_boneless,cut9_skin,cut9_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};

$scope.breast_cut = {sub_cuts:'cut10',max_qty:0,max_weight:0, //optional properties
								qty:0,weight:0,percent:56.5,piece_per_cut:2};								
$scope.cut9_boneless = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:12.7,piece_per_cut:1}; 								
$scope.cut9_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
					qty:0,weight:0,percent:10.2,piece_per_cut:1}; 								
$scope.cut9_skin = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
					qty:0,weight:0,percent:20.5,piece_per_cut:1}; 

// cut10
$scope.w_cut10 = {qty:0,demand:2};							
$scope.cut10 = { parent:'breast_cut',
				pieces:'cut10_boneless' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.cut10_boneless = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:100,piece_per_cut:1}; 

// cut11
$scope.w_cut11 = {qty:0,demand:2};							
$scope.cut11 = { parent:'wings',
				pieces:'lollipop,cut11_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.lollipop = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:81,piece_per_cut:1}; 
$scope.cut11_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:19,piece_per_cut:1}; 
// cut12
$scope.w_cut12 = {qty:0,demand:2};							
$scope.cut12 = { parent:'leg',
				pieces:'thai_with_skin,drumstick_with_skin' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.thai_with_skin = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:59,piece_per_cut:1};
$scope.drumstick_with_skin = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:41,piece_per_cut:1}; 						
// cut13
$scope.w_cut13 = {qty:0,demand:2};							
$scope.cut13 = { parent:'leg',
				pieces:'leg_without_skin,cut13_skin' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.leg_without_skin = {sub_cuts:'cut14,cut15',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:87,piece_per_cut:1};
$scope.cut13_skin = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:13,piece_per_cut:1}; 

// cut14
$scope.w_cut14 = {qty:0,demand:2};							
$scope.cut14 = { parent:'leg_without_skin',
				pieces:'thai_without_skin,drumstick_without_skin' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.thai_without_skin = {sub_cuts:'cut16',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:59,piece_per_cut:1};
$scope.drumstick_without_skin = {sub_cuts:'cut17',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:41,piece_per_cut:1}; 

// cut15
$scope.w_cut15 = {qty:0,demand:2};							
$scope.cut15 = { parent:'leg_without_skin',
				pieces:'cut15_boneless,cut15_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.cut15_boneless = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:79,piece_per_cut:1};
$scope.cut15_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:21,piece_per_cut:1}; 

// cut16
$scope.w_cut16 = {qty:0,demand:2};							
$scope.cut16 = { parent:'thai_without_skin',
				pieces:'cut16_boneless,cut16_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.cut16_boneless = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:80,piece_per_cut:1};
$scope.cut16_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:20,piece_per_cut:1};

// cut17
$scope.w_cut17 = {qty:0,demand:2};							
$scope.cut17 = { parent:'drumstick_without_skin',
				pieces:'cut17_boneless,cut17_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.cut17_boneless = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:80,piece_per_cut:1};
$scope.cut17_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:20,piece_per_cut:1};
// cut18
$scope.w_cut18 = {qty:0,demand:2};							
$scope.cut18 = { parent:'',
				pieces:'mince' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.mince = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:120,piece_per_cut:1};


// cut19
$scope.w_cut19 = {qty:0,demand:2};							
$scope.cut19 = { parent:'curry_cut',
				pieces:'shreded_boiled_chicken,cut19_bone' ,    
				deactive:false,total_cut_wt:0,total_cut_qty:0,color:{'background-color':green_color}};
							
$scope.shreded_boiled_chicken = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:80,piece_per_cut:1};
$scope.cut19_bone = {sub_cuts:'',max_qty:0,max_weight:0, //optional properties
						qty:0,weight:0,percent:20,piece_per_cut:1};

						
function chop(cut_name,input_qty,input_weight){ 
	//console.log("in weight");
	var new_weight=0;
	var new_qty=0;	
	var total_cut_wt=0;	
	var total_cut_qty=0;	
	// getting parent details
	var parent=$scope.$eval(cut_name).parent; 
	var parent_wt=$scope.$eval(parent).weight; 
	var parent_qty=$scope.$eval(parent).qty; 
	var input_demand=$scope.$eval("w_"+cut_name).demand; 
	
	//changing row colour
	if(input_demand == 0){
			$scope.$eval(cut_name).color={'background-color':grey_color};
			$scope.$eval(cut_name).deactive=true;
		}else if(input_demand > input_qty){ 
			$scope.$eval(cut_name).color={'background-color':red_color};
		}else{
			$scope.$eval(cut_name).color={'background-color':green_color};
		}
	var temp=$scope.$eval(cut_name).pieces;
	if(temp){	
			 var tem_arr= temp.split(",");
				for (var piece in tem_arr) {			
					var name=tem_arr[piece];
					var pc=$scope.$eval(name).percent;
					var piece_per_cut=$scope.$eval(name).piece_per_cut;			
					 new_qty=piece_per_cut * input_qty ;
					 new_weight =getPercent(pc,input_weight * input_qty);
					 $scope.$eval(name).weight=new_weight;
					 $scope.$eval(name).qty=new_qty;
					total_cut_wt+=	new_weight;
					total_cut_qty+=	new_qty;
				}
				//console.log(cut_name+"  "+new_weight);
				$scope.$eval(cut_name).total_cut_qty=$scope.$eval("w_"+cut_name).qty;
				$scope.$eval(cut_name).total_cut_wt=total_cut_wt;
			}
}
function evalAll(obj){
	var parent_wt=$scope.$eval(obj).max_weight; 
	var parent_qty=$scope.$eval(obj).max_qty; 
	var total_qty=0;
	var total_wt=0;
	var pc=$scope.$eval(obj).percent;
	var sub=$scope.$eval(obj).sub_cuts; 
	
	// claculate the sub cuts quantities
	if(sub){ 
			var sub_arr = sub.split(",");
				for (var sub_cut in sub_arr) { 
				total_qty+=$scope.$eval(sub_arr[sub_cut]).total_cut_qty; 
				total_wt+=$scope.$eval(sub_arr[sub_cut]).total_cut_wt; 
				parent=$scope.$eval(sub_arr[sub_cut]).parent;
					
				}
			}
	//console.log(obj+"  "+parent_wt);		
	$scope.$eval(obj).qty=parent_qty-total_qty;  	
	$scope.$eval(obj).weight=parent_wt-total_wt; 

}	
function getPercent(pc,input_weight){
var count1 = pc * input_weight;
var count2 = count1 / 100;
	return count2;
}

 // Put watch on each cut 
	$scope.$watch('w_cut1', function(newValue) {
	 funcs["cut1"]();
	},true);
	$scope.$watch('w_cut2', function(newValue) {
	 funcs["cut2"]();
	},true);
	$scope.$watch('w_cut3', function(newValue) {
	 funcs["cut3"]();
	},true);
	$scope.$watch('w_cut4', function(newValue) {
	 funcs["cut4"]();
	},true);
	$scope.$watch('w_cut5', function(newValue) {
	 funcs["cut5"]();
	},true);
	$scope.$watch('w_cut6', function(newValue) {
	 funcs["cut6"]();
	},true);
	$scope.$watch('w_cut7', function(newValue) {
	 funcs["cut7"]();
	},true);
	$scope.$watch('w_cut8', function(newValue) {
	 funcs["cut8"]();
	},true);
	$scope.$watch('w_cut9', function(newValue) {
	 funcs["cut9"]();
	},true);
	$scope.$watch('w_cut10', function(newValue) {
	 funcs["cut10"]();
	},true);
	$scope.$watch('w_cut11', function(newValue) {
	 funcs["cut11"]();
	},true);
	$scope.$watch('w_cut12', function(newValue) {
	 funcs["cut12"]();
	},true);
	$scope.$watch('w_cut13', function(newValue) {
	 funcs["cut13"]();
	},true);
	$scope.$watch('w_cut14', function(newValue) {
	 funcs["cut14"]();
	},true);
	$scope.$watch('w_cut15', function(newValue) {
	 funcs["cut15"]();
	},true);
	$scope.$watch('w_cut16', function(newValue) {
	 funcs["cut16"]();
	},true);
	$scope.$watch('w_cut17', function(newValue) {
	 funcs["cut17"]();
	},true);
	$scope.$watch('w_cut18', function(newValue) {
	 funcs["cut18"]();
	},true);
	$scope.$watch('w_cut19', function(newValue) {
	 funcs["cut19"]();
	},true);
	
//cut functions on every watch	
var funcs = {
	"cut1": function(){
		var parent=$scope.cut1.parent; 
		var input_weight=AVG_CHICKEN_WEIGHT;
		var input_qty=$scope.w_cut1.qty;		
		var input_demand=$scope.w_cut1.demand;
		
		chop('cut1',input_qty,input_weight);
		//console.log("dev "+$scope.chicken_with_skin_8.weight);
		evalAll(parent,'cut1');
	},
	"cut2": function(){
		var parent=$scope.cut2.parent; 
		var input_weight=AVG_CHICKEN_WEIGHT;
		var input_qty=$scope.w_cut2.qty;		
		var input_demand=$scope.w_cut2.demand;
		chop('cut2',input_qty,input_weight);
		evalAll(parent,'cut2');
	},
	"cut3": function(){
	  var parent=$scope.cut3.parent; 
		var input_weight=AVG_CHICKEN_WEIGHT;
		var input_qty=$scope.w_cut3.qty;		
		var input_demand=$scope.w_cut3.demand;
		chop('cut3',input_qty,input_weight);
		evalAll(parent,'cut3');
	},
	"cut4": function(){
	 var parent=$scope.cut4.parent; 
		var input_weight=AVG_CHICKEN_WEIGHT;
		var input_qty=$scope.w_cut4.qty;		
		var input_demand=$scope.w_cut4.demand;
		chop('cut4',input_qty,input_weight);
		// saving max quantity of parent
		var max_q=$scope.chicken_without_skin.max_qty=$scope.chicken_without_skin.qty;
		var max_wt=$scope.chicken_without_skin.max_weight=$scope.chicken_without_skin.weight;
		
		evalAll(parent,'cut4');
	},
	"cut5": function(){
	 var parent=$scope.cut5.parent; 
	 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		//console.log(input_weight);
		var input_qty=$scope.w_cut5.qty;		
		var input_demand=$scope.w_cut5.demand;
		chop('cut5',input_qty,input_weight);
		evalAll(parent,'cut5');
	},
	"cut6": function(){
	  var parent=$scope.cut6.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut6.qty;		
		var input_demand=$scope.w_cut6.demand;
		chop('cut6',input_qty,input_weight);
		evalAll(parent,'cut6');
	},
	"cut7": function(){
	 var parent=$scope.cut7.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut7.qty;		
		var input_demand=$scope.w_cut7.demand;
		chop('cut7',input_qty,input_weight);
		evalAll(parent,'cut7');
	},
	"cut8": function(){
	   var parent=$scope.cut8.parent; 
		var input_weight=AVG_CHICKEN_WEIGHT;
		var input_qty=$scope.w_cut8.qty;		
		var input_demand=$scope.w_cut8.demand;
		chop('cut8',input_qty,input_weight);
		
		//max value for breast
		var max_q=$scope.breast.max_qty=$scope.breast.qty;
		var max_wt=$scope.breast.max_weight=$scope.breast.weight;
		
		//max value for wings
		var max_q=$scope.wings.max_qty=$scope.wings.qty;
		var max_wt=$scope.wings.max_weight=$scope.wings.weight;
		
		//max value for curry_cut
		var max_q=$scope.curry_cut.max_qty=$scope.curry_cut.qty;
		var max_wt=$scope.curry_cut.max_weight=$scope.curry_cut.weight;
		
		//max value for leg
		var max_q=$scope.leg.max_qty=$scope.leg.qty;
		var max_wt=$scope.leg.max_weight=$scope.leg.weight;
											
											
		evalAll(parent,'cut8'); 
	},
	"cut9": function(){
	    var parent=$scope.cut9.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut9.qty;		
		var input_demand=$scope.w_cut9.demand;
		chop('cut9',input_qty,input_weight);
		//max value for breast
		var max_q=$scope.breast_cut.max_qty=$scope.breast_cut.qty;
		var max_wt=$scope.breast_cut.max_weight=$scope.breast_cut.weight;
		evalAll(parent,'cut9'); 
	},
	"cut10": function(){ 
		var parent=$scope.cut10.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,getPercent($scope.breast.percent,AVG_CHICKEN_WEIGHT)) ;
		var input_qty=$scope.w_cut10.qty;		
		var input_demand=$scope.w_cut10.demand;
		chop('cut10',input_qty,input_weight);
		
		evalAll(parent,'cut10'); 
	},
	"cut11": function(){
	  var parent=$scope.cut11.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut11.qty;		
		var input_demand=$scope.w_cut11.demand;
		chop('cut11',input_qty,input_weight);
		
		evalAll(parent,'cut11'); 
	},
	"cut12": function(){
	 var parent=$scope.cut12.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut12.qty;		
		var input_demand=$scope.w_cut12.demand;
		chop('cut12',input_qty,input_weight);
		
		evalAll(parent,'cut12'); 
	},
	"cut13": function(){
	 var parent=$scope.cut13.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut13.qty;		
		var input_demand=$scope.w_cut13.demand;
		chop('cut13',input_qty,input_weight);
		//max value for breast
		var max_q=$scope.leg_without_skin.max_qty=$scope.leg_without_skin.qty;
		var max_wt=$scope.leg_without_skin.max_weight=$scope.leg_without_skin.weight;
		//console.log(input_weight+"max- "+max_wt);
		evalAll(parent,'cut13'); 
	},
	"cut14": function(){
	  var parent=$scope.cut14.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,getPercent($scope.leg.percent,AVG_CHICKEN_WEIGHT)) ;
		var input_qty=$scope.w_cut14.qty;		
		var input_demand=$scope.w_cut14.demand;
		chop('cut14',input_qty,input_weight);
		//max value for  thai_without_skin
		var max_q=$scope.thai_without_skin.max_qty=$scope.thai_without_skin.qty;
		var max_wt=$scope.thai_without_skin.max_weight=$scope.thai_without_skin.weight;
		//max value for breast
		var max_q2=$scope.drumstick_without_skin.max_qty=$scope.drumstick_without_skin.qty;
		var max_wt2=$scope.drumstick_without_skin.max_weight=$scope.drumstick_without_skin.weight;
		
		//console.log("max- "+max_wt);
		evalAll(parent,'cut14');  
	},
	"cut15": function(){
	  var parent=$scope.cut15.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,getPercent($scope.leg.percent,AVG_CHICKEN_WEIGHT)) ;
		var input_qty=$scope.w_cut15.qty;		
		var input_demand=$scope.w_cut15.demand;
		chop('cut15',input_qty,input_weight);
		evalAll(parent,'cut15');  
	},
	"cut16": function(){
	  var parent=$scope.cut16.parent; 
	  
		var input_weight=getPercent($scope.$eval(parent).percent,getPercent($scope.leg_without_skin.percent,getPercent($scope.leg.percent,AVG_CHICKEN_WEIGHT))) ;
		var input_qty=$scope.w_cut16.qty;		
		var input_demand=$scope.w_cut16.demand;
		chop('cut16',input_qty,input_weight);
		evalAll(parent,'cut16');  
	},
	"cut17": function(){
	  var parent=$scope.cut17.parent; 
	  var input_weight=getPercent($scope.$eval(parent).percent,getPercent($scope.leg_without_skin.percent,getPercent($scope.leg.percent,AVG_CHICKEN_WEIGHT))) ;
		var input_qty=$scope.w_cut17.qty;		
		var input_demand=$scope.w_cut17.demand;
		chop('cut17',input_qty,input_weight);
		evalAll(parent,'cut17');  
	},
	"cut18": function(){
	  
	},
	"cut19": function(){
	 var parent=$scope.cut19.parent; 
		var input_weight=getPercent($scope.$eval(parent).percent,AVG_CHICKEN_WEIGHT) ;
		var input_qty=$scope.w_cut19.qty;		
		var input_demand=$scope.w_cut19.demand;
		chop('cut19',input_qty,input_weight);
		evalAll(parent,'cut19');  
	},
	"boneless": function(){
	  
	},
	"bone": function(){
	
	},
	"skin": function(){
	 
	}
	
}

	
}
cutApp.controller(controllers, []);