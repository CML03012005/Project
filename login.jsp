<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <!-- css -->
         <link rel="stylesheet" href="${pageContext.request.contextPath}/css/login.css">
        
    </head>
<body>
  <div class="wrappers">
    <input type="text" id="username" name="username" placeholder="&nbsp; Username" /> 

    <input type="text" id="password" name="password" placeholder="&nbsp; Password" />
    
    <label for="remember">
      <input type="checkbox" id="remember" name="remember"/>Remember me
    </label> 
    
    <button>Log in</button>

    <p>Not a member? <a href="signup.html">Sign up</a></p>
  </div>

</body>
</html>
