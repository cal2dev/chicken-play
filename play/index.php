<!DOCTYPE html>
<!-- saved from url=(0033)http://brownapron.com/ba/meatcuts -->
<html class="" ><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<title>Brown Apron</title>
<link rel="stylesheet" href="files/bootstrap.min.css">
<link rel="stylesheet" href="files/library.css">
<link rel="stylesheet" href="files/custom.css">
  <script language="JavaScript" type="text/javascript" src="files/jquery.js"></script>
<style type="text/css">.fancybox-margin{margin-right:0px;}</style><style type="text/css"></style><meta name="chromesniffer" id="chromesniffer_meta" content="{&quot;jQuery&quot;:&quot;1.10.2&quot;,&quot;jQuery UI&quot;:&quot;1.10.3&quot;}"><script type="text/javascript" src="chrome-extension://homgcnaoacgigpkkljjjekpignblkeae/detector.js"></script></head>

<body>
<div class="container"> 
<style>
input.new-inp {
width: 300px;
display: inline;
height: 29px;
margin: 0 20px;
}
select.new-sel {
width: 104px;
margin: 0 20px;
}
.inp-qty{
width: 60px;
height: 20px;
border-radius: 6px;
text-align: center;
margin: 0;
padding: 0;
background-color: #FFF;
border: 0;
font-weight: bold;
}
.inp-qty2{
width: 60px;
height: 20px;
border-radius: 6px;
text-align: center;
margin: 0;
padding: 0;
background-color: #81D9FF;
border: 0;
font-weight: bold;
}
.inp-qty3{
width: 60px;
height: 20px;
border-radius: 6px;
text-align: center;
margin: 0;
padding: 0;
background-color: #C8C8BA;
border: 0;
font-weight: bold;
}
table label {
width: 69px;
}
</style>

<div class="module" data-ng-app="CutApp" >
    
<div id="meat-cut-response"> 
  <div class="col-md-12"  data-ng-controller="cutFunction">     
	<table class="table table-striped" >      
		<thead>
		  <tr>
			<th>Input SKU </th>
			<th>Cut Qty</th>
			<th>SKU1 </th>
			<th> SKU2 </th>
			<th> SKU3 </th>
			<th> SKU4 </th>
		  </tr>
		</thead>        
		<tbody>   
			<!-- *********** Start Cut 1 to 3   *************  -->		
		 <tr>
			<td ng-style="cut1.color">Cut 1 - Chicken with skin 
				<br/><label>Inventory</label> <input class="inp-qty2" data-ng-model="chicken_with_skin.qty" readonly/>
				<br/><label>Weight</label> <input class="inp-qty2" data-ng-model="chicken_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut1.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut1.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut1.qty" type="number" min="0" ng-disabled="cut1.deactive" />
			</td>
			<td ng-style="cut1.color">Chicken with skin 8 Pcs  
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_8.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_8.weight" readonly/>
			</td>
			<td ng-style="cut1.color" ></td>
			<td ng-style="cut1.color" ></td>
			<td ng-style="cut1.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut2.color">Cut 2 - Chicken with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_with_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut2.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut2.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut2.qty" type="number" min="0" ng-disabled="cut2.deactive"/>
			</td>
			<td ng-style="cut2.color">Chicken with skin 16 Pcs  
			<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_16.qty" readonly/>
			<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_16.weight" readonly/>
			</td>
			<td ng-style="cut2.color" ></td>
			<td ng-style="cut2.color" ></td>
			<td ng-style="cut2.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut3.color">Cut 3 - Chicken with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_with_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut3.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut3.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut3.qty" type="number" min="0" ng-disabled="cut3.deactive"/>
			</td>
			<td ng-style="cut3.color">Chicken with skin 32 Pcs  
			<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_32.qty" readonly/>
			<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_with_skin_32.weight" readonly/>
			</td>
			<td ng-style="cut3.color" ></td>
			<td ng-style="cut3.color" ></td>
			<td ng-style="cut3.color" ></td>
		  </tr>
		  <!-- *********** End Cut 1 to 3   *************  -->
		  
		  <!-- *********** Start Cut 4 to 7   *************  -->
		   <tr>
			<td ng-style="cut4.color">Cut 4 - Chicken with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_with_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut4.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut4.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut4.qty" type="number" min="0" ng-disabled="cut4.deactive"/>
			</td>
			<td ng-style="cut4.color">Chicken without skin  
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut4.color" > Skin
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut4_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut4_skin.weight" readonly/>
			</td>
			<td ng-style="cut4.color" ></td>
			<td ng-style="cut4.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut5.color">Cut 5 - Chicken without skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut5.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut5.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut5.qty" type="number" min="0" ng-disabled="cut5.deactive"/>
			</td>
			<td ng-style="cut5.color">Chicken without skin 8 Pcs  
			<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_8.qty" readonly/>
			<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_8.weight" readonly/>
			</td>
			<td ng-style="cut5.color" ></td>
			<td ng-style="cut5.color" ></td>
			<td ng-style="cut5.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut6.color">Cut 6 - Chicken without skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut6.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut6.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut6.qty" type="number" min="0" ng-disabled="cut6.deactive"/>
			</td>
			<td ng-style="cut6.color">Chicken without skin 16 Pcs  
			<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_16.qty" readonly/>
			<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_16.weight" readonly/>
			</td>
			<td ng-style="cut6.color" ></td>
			<td ng-style="cut6.color" ></td>
			<td ng-style="cut6.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut7.color">Cut 7 - Chicken with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut7.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut7.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut7.qty" type="number" min="0" ng-disabled="cut7.deactive"/>
			</td>
			<td ng-style="cut7.color">Chicken with skin 32 Pcs  
			<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_32.qty" readonly/>
			<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="chicken_without_skin_32.weight" readonly/>
			</td>
			<td ng-style="cut7.color" ></td>
			<td ng-style="cut7.color" ></td>
			<td ng-style="cut7.color" ></td>
		  </tr>
		  <!-- *********** End Cut 4 to 7   *************  -->
		  
		  <!-- *********** Start Cut 8 to 19   *************  -->
		   <tr>
			<td ng-style="cut8.color">Cut 8 - Chicken with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="chicken_with_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="chicken_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut8.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut7.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut8.qty" type="number" min="0" ng-disabled="cut8.deactive"/>
			</td>
			<td ng-style="cut8.color">Breast with skin and bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="breast.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="breast.weight" readonly/>
			</td>
			<td ng-style="cut8.color" >Wings 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="wings.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="wings.weight" readonly/>
			
			</td>
			<td ng-style="cut8.color" >Curry Cut 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="curry_cut.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="curry_cut.weight" readonly/>			
			</td>
			<td ng-style="cut8.color" >Leg with skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="leg.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="leg.weight" readonly/>	
			</td>
		  </tr>
		   <tr>
			<td ng-style="cut9.color">Cut 9 - Breast with skin and bone  
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="breast.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="breast.weight" readonly/>
			</td>
			<td ng-style="cut9.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut9.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut9.qty" type="number" min="0" ng-disabled="cut9.deactive"/>
			</td>
			<td ng-style="cut9.color">Breast 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="breast_cut.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="breast_cut.weight" readonly/>
			</td>
			<td ng-style="cut9.color" >
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut9_boneless.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut9_boneless.weight" readonly/>
			</td>
			<td ng-style="cut9.color" >
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut9_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut9_bone.weight" readonly/>
			</td>
			<td ng-style="cut9.color" >
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut9_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut9_skin.weight" readonly/>
			</td>
		  </tr>
		  <tr>
			<td ng-style="cut10.color">Cut 10 - Breast 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="breast_cut.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="breast_cut.weight" readonly/>
			</td>
			<td ng-style="cut10.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut10.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut10.qty" type="number" min="0" ng-disabled="cut10.deactive"/>
			</td>
			<td ng-style="cut10.color">Boneless 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut10_boneless.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut10_boneless.weight" readonly/>
			</td>
			<td ng-style="cut10.color" ></td>
			<td ng-style="cut10.color" ></td>
			<td ng-style="cut10.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut11.color">Cut 11 - Wings  
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="wings.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="wings.weight" readonly/>
			</td>
			<td ng-style="cut11.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut11.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut11.qty" type="number" min="0" ng-disabled="cut11.deactive"/>
			</td>
			<td ng-style="cut11.color">Lollipop 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="lollipop.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="lollipop.weight" readonly/>
			</td>
			<td ng-style="cut11.color">Bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut11_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut11_bone.weight" readonly/>
			</td>
			<td ng-style="cut11.color" ></td>
			<td ng-style="cut11.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut12.color">Cut 12 - Leg with skin  
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="leg.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="leg.weight" readonly/>
			</td>
			<td ng-style="cut12.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut12.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut12.qty" type="number" min="0" ng-disabled="cut12.deactive"/>
			</td>
			<td ng-style="cut12.color">Thai with skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="thai_with_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="thai_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut12.color">Drumstick with skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="drumstick_with_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="drumstick_with_skin.weight" readonly/>
			</td>
			<td ng-style="cut12.color" ></td>
			<td ng-style="cut12.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut13.color">Cut 13 - Leg with skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="leg.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="leg.weight" readonly/>
			</td>
			<td ng-style="cut13.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut13.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut13.qty" type="number" min="0" ng-disabled="cut13.deactive"/>
			</td>
			<td ng-style="cut13.color">Leg without skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="leg_without_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="leg_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut13.color">Skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut13_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut13_skin.weight" readonly/>
			</td>
			<td ng-style="cut13.color" ></td>
			<td ng-style="cut13.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut14.color">Cut 14 - Leg without skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="leg_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="leg_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut14.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut14.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut14.qty" type="number" min="0" ng-disabled="cut14.deactive"/>
			</td>
			<td ng-style="cut14.color">Thai without skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="thai_without_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="thai_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut14.color">Drumstick without skin 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="drumstick_without_skin.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="drumstick_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut14.color" ></td>
			<td ng-style="cut14.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut15.color">Cut 15 - Leg without skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="leg_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="leg_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut15.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut15.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut15.qty" type="number" min="0" ng-disabled="cut15.deactive"/>
			</td>
			<td ng-style="cut15.color">Boneless
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut15_boneless.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut15_boneless.weight" readonly/>
			</td>
			<td ng-style="cut15.color">Bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut15_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut15_bone.weight" readonly/>
			</td>
			<td ng-style="cut15.color" ></td>
			<td ng-style="cut15.color" ></td>
		  </tr>
		   <tr>
			<td ng-style="cut16.color">Cut 16 - Thai without Skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="thai_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="thai_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut16.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut16.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut16.qty" type="number" min="0" ng-disabled="cut16.deactive"/>
			</td>
			<td ng-style="cut16.color">Boneless
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut16_boneless.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut16_boneless.weight" readonly/>
			</td>
			<td ng-style="cut16.color">Bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut16_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut16_bone.weight" readonly/>
			</td>
			<td ng-style="cut16.color" ></td>
			<td ng-style="cut16.color" ></td>
		  </tr>
		   <tr>
			<td ng-style="cut17.color">Cut 17 - Drumstick without skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="drumstick_without_skin.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="drumstick_without_skin.weight" readonly/>
			</td>
			<td ng-style="cut17.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut17.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut17.qty" type="number" min="0" ng-disabled="cut17.deactive"/>
			</td>
			<td ng-style="cut17.color">Boneless
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut17_boneless.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut17_boneless.weight" readonly/>
			</td>
			<td ng-style="cut17.color">Bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut17_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut17_bone.weight" readonly/>
			</td>
			<td ng-style="cut17.color" ></td>
			<td ng-style="cut17.color" ></td>
		  </tr>
		  <tr>
			<td ng-style="cut18.color">Cut 18 - drumstick_without_skin 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="boneless.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="boneless.weight" readonly/>
			</td>
			<td ng-style="cut18.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut18.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut18.qty" type="number" min="0" ng-disabled="cut18.deactive"/>
			</td>
			<td ng-style="cut18.color">Mince
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="mince.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="mince.weight" readonly/>
			</td>
			<td ng-style="cut18.color"></td>
			<td ng-style="cut18.color" ></td>
			<td ng-style="cut18.color" ></td>
		  </tr>
		   <tr>
			<td ng-style="cut19.color">Cut 19 - Curry Cut 
				<br/><label>Inventory</label><input class="inp-qty2" data-ng-model="curry_cut.qty" readonly/>
				<br/><label>Weight</label><input class="inp-qty2" data-ng-model="curry_cut.weight" readonly/>
			</td>
			<td ng-style="cut19.color">
				<label>Demand </label> <input class="inp-qty2" data-ng-model="w_cut19.demand" readonly/>
				<br/><label>Quantity </label> <input class="inp-qty" data-ng-model="w_cut19.qty" type="number" min="0" ng-disabled="cut19.deactive"/>
			</td>
			<td ng-style="cut19.color">Boneless
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="shreded_boiled_chicken.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="shreded_boiled_chicken.weight" readonly/>
			</td>
			<td ng-style="cut19.color">Bone 
				<br/><label>Quantity</label>  <input class="inp-qty2" data-ng-model="cut19_bone.qty" readonly/>
				<br/><label>Weight</label>  <input class="inp-qty2" data-ng-model="cut19_bone.weight" readonly/>
			</td>
			<td ng-style="cut19.color" ></td>
			<td ng-style="cut19.color" ></td>
		  </tr>
		  <!-- *********** End Cut 8 to 19   *************  -->
		  
		</tbody>
	</table> 
	</div>
</div>
</div>    
</div>

<div class="footer">
	<div class="container">
    <div class="col-md-3"><p>Powered by Brownapron</p></div>
    <div class="col-md-3 pull-right text-right">
    <!-- <p><a href="#">Help</a> &middot; <a href="#">Terms</a></p> --></div>
  </div>
</div>
 
 
<!-- <script type="text/javascript" src="http://brownapron.com/ba/js/jquery.js"></script>     --> 
<!--  <script type="text/javascript" src="http://brownapron.com/ba/js/library.js"></script> -->
<script type="text/javascript" src="files/custom.js"></script>
<script type="text/javascript" src="angular.min.js"></script>
<script type="text/javascript" src="cutFunction.js"></script>
<script>
/*
window.addEventListener("beforeunload", function (e) {
  var message = "If you refresh the page your data will be lost";

  (e || window.event).returnValue = message;     
  return message;                                
}); */
</script>


</body>
</html>