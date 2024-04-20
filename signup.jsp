<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <!-- css -->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/signup.css">

        <!-- script -->


    </head>
<body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the necessary information</p>
    <div id="error"></div>
    <form id="form" action="" method="GET">
        <fieldset>
            <label for="username">Username:
                <input type="text" id="username" name="username" placeholder="Username" />
            </label>

            <label for="password">Password:
                <input type="password" id="password" name="password" placeholder="Password" />
            </label>

            <label for="confirmpassword">Confirm Password:
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
            </label>

            <label for="firstName">First name:
                <input type="text" id="firstname" name="firstname" placeholder="First name" />
            </label>

            <label for="middleName">Middle name (not required):
                <input type="text" id="middlename" name="middlename" placeholder="Middle name" />

            </label>

            <label for="lastName">Last name:
                <input type="text" id="lastname" name="lastname" placeholder="Last name" />
            </label>

            <label for="address">Complete Address:
                <input type="text" id="address" name="address" placeholder="Full Address" />
            </label>

            <label for="birthdate">Birthdate
                <input type="text" id="birthdate" name="birthdate" placeholder="DD-MM-YYYY" />
            </label>

            <label for="mobile">Mobile no.
                <input type="text" id="mobile" name="mobile" placeholder="09XXXXXXXXX" />
            </label>
        </fieldset>

        <label for="terms-and-conditions">
            <input class="inline" type="checkbox" name="terms-and-conditions" id="terms-and-conditions"  /> I accecpt the
            <a href="">terms and conditions</a>
        </label>
        <input type="submit" value="submit" />
    </form>

    <script type='text/javascript' src="${pageContext.request.contextPath}/js/signup.js"></script>
</body>
</html>
