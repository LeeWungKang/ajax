/**
 * 
 */



$(document).ready(function() { 
    
    $("#id").focusout(function() {
        var id =  $.trim($("#id").val());
        var exp = /[a-z0-9]$/;
        
        if (id.length < 3 || id.length > 16){
        	$('#msg').html('<span style="color:red;"> 아이디는 4~16글자 내외 </span>');
        	$('#id').val('');
        	$('#id').focus();
        	return false ;
        }
        if (id == "" || id.length == 0) {
            alert("아이디를 입력해주세요");
            $('#id').val('');
            $('#id').focus();
            return false ;
        }
        if(!exp.test(id)){ 
        	alert("영문자와 숫자만 입력가능합니다.");
        	$('#id').val('');
        	$('#id').focus(); 
        	return false ; 
        }
       /*  alert(id); */
        $.ajax({
            type : "get",
            data : { id : id },
            url : "Ajax_ID_check",
            dataType: "json",
            async : false,       //순차적 처리 
            success : function(result) {
            	if(result == 0){
                $("#msg").html("(!) 중복된 아이디. (사용불가)");
                $("#msg").attr("color","red");
                $('#id').val('');
            	$("#id").focus(); 
                return;
            	
            	}else {																
            	$("#msg").html("사용 할 수 있는 아이디 입니다.  <button type='button' id='textBtn' class='id_btn' onclick='idbtn()'> 사용 </button>");
	            $("#msg").attr("color","blue");
	            return;
             	}
            },
          	  error: function () {	alert("서버 요청 실패");}
        });
    });
 }); 


$(function(){ //비밀번호 일치여부 
		$('#pw2').focusout(function(){
			 var pw1 =  $.trim($("#pw1").val());
			 var pw2 =  $.trim($("#pw2").val());
		
		if($('#pw1').val() == '' || $('#pw2').val() ==''){
		     $("#check").html("패스워드를 입력해주세요.");
		     $("#check").attr("color","red");
		     	  $('#pw2').val('');
		     	   return false;
		}
		if(pw1.length < 4 || pw1.length > 16){
		     $("#check").html("패스워드는 4~16글자 내외로 입력하세요.");
		     $("#check").attr("color","red");
		     	  $('#pw1').val('');
	         	  $('#pw1').focus();
		     	  return false;
		} 
		if($('#pw1').val() != $('#pw2').val()){
		    	if($('#pw2').val()!=''){
		      	   $("#check").html("(!)패스워드를 확인해 주세요.");
		     	   $("#check").attr("color","red");
		    	  	  $('#pw2').val('');
		         	  $('#pw2').focus();
		         	  return false;
		       	}
		}else{
		   	 $("#check").html("패스워드가 일치합니다.");
			 $("#check").attr("color","blue");
			return;
		    }
		})  	   
	});
	
	
//이메일 데이타에 중복여부 유효성.
$(document).ready(function() { 
	 $("#email_value").on("change",function(){     //자동입력칸으로 이용할시 유효성
			var email =  $.trim($("#email").val());
	        var email02 = $.trim($("#email02").val());
	        var exp = /[a-z0-9]$/;
	        var emailCheck = $("#emailCheck").val();
	        var sumMail = email+"@"+email02
	        
	        emailCheck = "";
	        if (email.length <= 2 || email.length > 16){
	        	$('#emailCheck').html('<span style="color:red;">이메일은 3~16글자 내외 </span>');
	        	$('#email').val('');
	        	$('#email02').val('');
	        	$('#email').focus();
	        	return false;
	        } if (email == "" || email.length == 0) {
	        	$('#emailCheck').html('<span style="color:red;"> 이메일을 입력 해주세요. </span>');
	            $('#email02').val('');
	            $('#email').focus();
	            return false;
	        } if(!exp.test(email)){ 
	        	$('#emailCheck').html('<span style="color:red;">영문자와 숫자만 입력 가능합니다. </span>');
	        	$('#email').val('');
	        	$('#email02').val('');
	        	$('#email').focus(); 
	        	return false; 
	        }
	        
	    $.ajax({  
	            type : "get",
	            data : { "sumMail" : sumMail },
	            url : "Ajax_email_check",
	            dataType: "json",
	            async : false,       //순차적 처리 
	            success : function(result) {
	            	if(result == 0){
	                $("#emailCheck").html("(!) 중복된 이메일 (사용불가)");
	                $("#emailCheck").attr("color","red");
	                $('#email').val('');
	                $('#email02').val('');
	            	$("#email").focus(); 
	                return;
	            	
	            	}else {																
	                	$("#emailCheck").html("사용 할 수 있는 이메일 입니다.   <button type='button' id='emailBtn1' onclick='btn_emailBtn1()' >사용 </button> "); 
	    	            $("#emailCheck").attr("color","blue");
	    	            return;
	                 	}
	                },
	              	  error: function () {	alert("서버 요청 실패");}
	        });
	 }); 
});   
$(document).ready(function() { 
    //이메일 주소까지 입력이 끝났으면 이벤트.
    $("#email02").change(function() {
        var email =  $.trim($("#email").val());
        var email02 = $.trim($("#email02").val());
        var exp = /[a-z0-9]$/;
        var emailCheck = $("#emailCheck").val();
       
        var sumMail = email+"@"+email02
        
        emailCheck = "";
        if (email.length <= 2 || email.length > 16){
        	$('#emailCheck').html('<span style="color:red;">이메일은 3~16글자 내외 </span>');
        	$('#email').val('');
        	$('#email02').val('');
        	$('#email').focus();
        	return false;
        } if (email == "" || email.length == 0) {
        	$('#emailCheck').html('<span style="color:red;"> 이메일을 입력 해주세요. </span>');
            $('#email').val('');
            $('#email02').val('');
            $('#email').focus();
            return false;
        } if(!exp.test(email)){ 
        	$('#emailCheck').html('<span style="color:red;">영문자와 숫자만 입력 가능합니다. </span>');
        	$('#email').val('');
        	$('#email02').val('');
        	$('#email').focus(); 
        	return false; 
        }
   
   $.ajax({   
            type : "get",
            data : { "sumMail" : sumMail },
            url : "Ajax_email_check",
            dataType: "json",
            async : false,       //순차적 처리 
            success : function(result) {
            	if(result == 0){
                $("#emailCheck").html("(!) 중복된 이메일 (사용불가)");
                $("#emailCheck").attr("color","red");
                $('#email').val('');
                $('#email02').val('');
            	$("#email").focus(); 
                return;
            	
            	}else {
            	$("#emailCheck").html("사용 할 수 있는 이메일 입니다. 		<button type='button' id='emailBtn2'  onclick='btn_emailBtn2()'>사용 </button> "); 
	            $("#emailCheck").attr("color","blue");
	            return;
             	}
            },
          	  error: function () {	alert("서버 요청 실패");}
        });
    }); 
}); 
 
 
 
// 이메일 셀렉터 직접입력시 화면 비활성화 시키기.
$('#email_value').change(function(){ $("#email_value option:selected").each(function () { 
	if($(this).val()== '1'){ 				  //직접입력일 경우 
		$("#email02").val('');			      //값 초기화 
 		$("#email02").attr("disabled",false);   //활성화 
	}else{ 									  //직접입력이 아닐경우 
	$("#email02").val($(this).text()); 			//선택값 입력 
 /* 	$("#email02").attr("disabled",true); */ 		  //비활성화  
	}  
	}); 
});


	
	//이메일 아작스가 인풋박스랑,셀렉트박스 2개를 id 명이랑 버튼명 동일하게 하면 오류걸림.
	function btn_emailBtn1(){    //이메일 "사용" 버튼 클릭시 이벤트   //"사용" 버튼누르면 버튼을 숨기고, 히든값 변경 (중복체크완료)
		 document.Join_form.Email_Duplication.value ="Email_check";
		 document.getElementById("emailBtn1").style.display="none";  
	}
	
	
	function btn_emailBtn2(){    
		 document.Join_form.Email_Duplication.value ="Email_check";
		 document.getElementById("emailBtn2").style.display="none";  
	}
		
		
	function idbtn(){    //아이디 "사용" 버튼 클릭시 이벤트   //"사용" 버튼누르면 버튼을 숨기고, 히든값 변경 (중복체크완료 안누르고가입하는걸 방지)
	document.Join_form.ID_Duplication.value ="ID_check";
		 document.getElementById("textBtn").style.display="none";   
	}
	
//휴대폰번호 4자리입시 자동으로 다음칸
	function erase(obj){   
		  obj.value="";
		  obj.focus();
		 }
	function moveNext(obj,length,nextObj){
		  if(obj.value.length==length){
		   nextObj.focus(); 
		  }}



//-최종- 폼 전송전 유효성 검사
function Check_value() {
 	var form = document.Join_form;
	
 	if(form.ID_Duplication.value != "ID_check"){  //아이디 중복체크 클릭 이벤트.
			alert("아이디 중복체크를 해주세요.");
			return;
	} 
	if(form.Email_Duplication.value != "Email_check"){  //이메일 중복체크 클릭 이벤트.
		alert("이메일 중복체크를 해주세요.");
		return;
	} 
	else if(!form.pw1.value ){
		alert("비밀번호를 입력하세요.");
		form.pw1.focus();
		return;
	}
	else if(form.pw2.value != form.pw1.value){
		alert("비밀번호가 맞는지 확인해주세요. ");
		form.pw2.focus();
		return;
	}
	else if(!form.name.value){
		alert("이름을 입력하세요.");
		form.name.focus();
		return;
	}
	else if(isNaN(form.tel_1.value) || isNaN(form.tel_2.value) ){
		alert("핸드폰 번호는 숫자만 입력 가능합니다.");
		return;
	}
	 else if(!form.email.value){
		alert("이메일을 입력하세요.");
		form.email.focus();
		return;
	}else{
		document.Join_form.method="post";
		document.Join_form.action="Insert_Signup";
		document.Join_form.submit();
	}}
	
	
	
/*  
		Login.main --  js
 								 */	
						
function Login() {
	var id =document.login_form.id.value;
	var pw =document.login_form.pw.value;
	var errMsg = document.getElementById("errMsg").value;
	
	if(id.value=="" || id.length==0){
		alert("아이디를 입력하세요.");
		document.login_form.id.focus();
		return;
	}else if(pw.value=="" || pw.length==0){
		alert("비밀번호를 입력하세요.");
		document.login_form.pw.focus();
		return;
	}else{
	 	alert("잠시만 기다려 주세요.");
		document.login_form.action="LoginPro";
		document.login_form.method="post";
		document.login_form.submit();
	}
}
function Sign_Up() {  
	location.href="./index.jsp?filePath=signUp";
}	





/*//  체크박스 전체 선택.   */

function check_All() {

	if ($("#th_checkAll").is(':checked')) {
		$("input[name=chcBox]").prop("checked", true);
	} else {
		$("input[name=chcBox]").prop("checked", false);
	}
}

/* 선택된 체크박스 배열에 담기  */

function Delete_Check_Popup() {
	var chcBox = "";

	$("input[name='chcBox']:checked").each(function() {
		chcBox = chcBox + $(this).val() + ","; // 체크된 것만 값을 뽑아서 배열에 push
		console.log(chcBox);
	});

	chcBox = chcBox.substring(0, chcBox.lastIndexOf(",")); //맨끝 콤마만 지우기

	if (chcBox == "") { //체크가 없을떄 유효성.
		alert("삭제할 대상을 선택하세요.");
		return false;
	}
	console.log("==== chcBox => []" + chcBox);

	$.ajax({
		type : "POST",
		url : "Delete_Check",
		data : { chcBox : chcBox },
		success : function(result) {
			console.log(result);
			if (result == "1") {
				alert('선택한 게시물이 삭제 되었습니다.');
				location.reload();
			}
			return;
		},
		error : function() {
			alert("서버요청 오류로 삭제 실패");
			return;
		}
	});
}
				














