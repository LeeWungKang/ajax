<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>

 	<input type="text" id="id" name="id"> 
		<button type="button" id="btn" onclick="fn_ajax();return false;">중복체크</button>
		<div><font id="msg">  </font> </div>
				
		
		
<script type="text/javascript">


	function fn_ajax() {
		
		$.ajax({
			type: "post",
			url: "./data/MOCK_DATA.json",          //요청할 서블릿페이지
			async : true,
			datatype: "json",
			success : function(data) {
				console.log(data);
				
				for(var i in data){
					var id = data[i].id;
					var first_name = data[i].first_name;
					var email = data[i].email;
					var gender = data[i].gender;
					
					$("#msg").append(id+' '+first_name+' '+email+' '+gender+"<br>");
					
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