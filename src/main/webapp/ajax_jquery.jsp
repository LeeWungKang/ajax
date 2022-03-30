<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 아작스 , 제이쿼리 테스트 </title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
	
	<h1> 제이쿼리 </h1>
	<p id="dddd"> 내용 </p>	
	<h3> 직접 선택자 </h3>
		
		<input type="text" id="id" name="id"> 
		<button type="button" id="btn" onclick="fn_ajax();return false;">중복체크</button>
		<div><font id="msg">  </font> </div>
				
		
		
<script type="text/javascript">

//문서에서부터 자료를 준비 시킴
//  == $(function()) { }  이랑 같다.
// 	$(document).ready(function () {
		
// 		$("#btn").click(function (e) {
// 			e.preventDefault();     //버튼의 기본기능을 없앤다. return false;
// 			var _txt = $("#txt").val();
// 			alert(_txt);
// 		})
// 	});


	function fn_ajax() {
		var id= $("#id").val();
		
		$.ajax({
			type: "get",
			url: "Idcheck",          //요청할 서블릿페이지
			data: { id : id },       //서버에 보낼 매개변수
			datatype: "json",
			   success : function(result) {
               	if(result == 0){
                   $("#msg").html("(!) 중복된 아이디. (사용불가)");
                   $("#msg").attr("color","red");
                   return;
               	
               	}else {
               		$("#msg").html("사용 할 수 있는 아이디 입니다.");
  	                $("#msg").attr("color","green");
  	            	 return;
               	}
               },
               error: function () {
				alert("서버 요청 실패");						
				}
           });
       };
		
       
</script>
</body>
</html>