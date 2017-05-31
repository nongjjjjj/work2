.controller('AppCtrl',function ($scope,$state,$Popup){
	$scope.login1={};
	var user="admin";
	var password="123456";
	$scope.doLogin=function(){
		if(user==$scope.login.username && password==$scope.login.password ){
			$state.go("history")
	}else{
        &ionicPopup.alert({
			title:'ล็อกอิน',
			template:'ไม่สามมรถล็อกอินได้ กรุณาตรวจสอบ'
		})
		
		$state.go("login");
			}
			
	}
})