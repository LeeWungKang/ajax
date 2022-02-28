<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <% 
    String msg = request.getParameter("msg");
    %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- 제이쿼리 최신버전 코드 -->
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<!--css, js 파일을 다운받아서 넣어서 쓰는 방법  -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!--제이쿼리 최신버전 코드 웹으로 연결해서 쓰는 방법  -->

</head>
<body class="container">

  <div class="mb-3 row">
    
    <label for="staticEmail" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
    
      <input type="text" id="id" name="id" >
      <input type="button" value="중복체크">
      
    <div ><font id="msg" > </font> </div>
    
    </div>
   
    </div>
    
<script type="text/javascript">
/* 	$(function() {
		//cleck 이벤트로 할수도 있음.
		$('#id').keyup(function() {
			//id에는 공백문자 허용 X  = trim 시킨다.
			var id= $.trim($(this).val());
			$(this).val(id);
			if(id.length < 3)
				$('#msg').html
				('<span style="color:red;">아이디는 4글자 이상</span>');
			else{
				//서버에 아이디 중복 체크 하러갓다온다.페이지url바뀌지 않도록 아작스 사용
			$('#msg').load("idcheck.jsp?id=" + id);
			}
		});
	}); */

	
	
	
	  $(document).ready(function() {
	        
	        /* alert("아작스 테스트"); */
	        
	        $("#id").keyup(function() {
	 
	            var id =  $.trim($("#id").val());
	            var exp = /[a-z0-9]$/;
	            
	            if (id.length < 3){
	            	$('#msg').html('<span style="color:red;"> 아이디는 4글자 이상 </span>');
	            	
	            }
	            
	            if (id == "" || id.length == 0) {
	                alert("아이디를 입력해주세요");
	                $("#id").focus();
	                return;
	            }
	            
	            if(!exp.test(id)){ 
	            	alert("영문자와 숫자만 입력가능합니다."); 
	            	$("#userid").focus(); 
	            	return; 
	            }

//$반복 var exp = /[a-z0-9]$/; //영문자와 숫자 //정규표현식. test(입력값) 규칙에 맞으면 true if(!exp.test(userid)){ alert("영문자와 숫자만 입력가능합니다."); $("#userid").focus(); return; }
//비동기 ajax 방식으로 데이터 주고 받기 방버버
	 
	 
	 
	          /*   alert(id); */
	            
	            $.ajax({
	                
	                type : "get",
	                data : { id : id },
	                url : "Idcheck",
	                dataType: "json",
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
	        });
	 
	    });
</script>










</body>
</html>