

## V3 Example

### html
```
<html>
  	<head>
    	<title>V3 reCAPTCHA demo: Simple page</title>
     	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  	</head>
  	<body>
    	<form id="demo-form">
            <button class="test">
                Submit
            </button>
            <br/>
    	</form>

		<script src="https://www.google.com/recaptcha/api.js?render=your_site_key"></script>
        <script>
            $(".test").on('click', function(e) {
                e.preventDefault()
                alert('clicked');
                grecaptcha.ready(function() {
                    grecaptcha.execute('your_site_key', {action: 'submit'}).then(function(token) {
                        console.log(token);
                        if(token) {
                            $.ajax({
                                url: "http://localhost:3000/api/fetch/example/get",
                                type: "GET",
                                headers: { 'g-recaptcha-response': token }
                            }).done(function(data) {
                                console.log( "Success", data);
                            }).fail(function(status, data) {
                                console.log( "Failed", data, status);
                            })
                        }
                    })
                })


            })
            ;
        </script>
  	</body>
</html>
```

### Validation Response

```
{
  success: true,
  challenge_ts: '2022-08-07T04:38:49Z',
  hostname: 'localhost'
}
```

## V2 Example

### html
```
<html>
  	<head>
    	<title>V2 reCAPTCHA demo: Simple page</title>
     	<script src="https://www.google.com/recaptcha/api.js"></script>
     	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  	</head>
  	<body>
    	<form id="demo-form">
    		<div 
    			class="g-recaptcha"
    			data-sitekey="your_site_key"
    			data-size="invisible">
    		</div>
      		<button class="test">Submit</button>
      		<br/>
    	</form>

        <script>
            $(".test").on('click', function(e) {
                e.preventDefault()
                alert('clicked');
                let captchaToken = grecaptcha.getResponse();
                console.log(captchaToken)
                if(captchaToken) {
                    $.ajax({
                        url: "http://localhost:3000/api/fetch/example/post",
                        type: "GET",
                        headers: { 'g-recaptcha-response': captchaToken }
                    }).done(function(data) {
                        console.log( "Success", data);
                    }).fail(function(status, data) {
                        console.log( "Failed", data, status);
                    })
                }
            })
            grecaptcha.ready(function() {
                console.log("ready")
                grecaptcha.execute()
            });
        </script>
  	</body>
</html>
```

### Validation Response

```
{
  success: true,
  challenge_ts: '2022-08-07T04:46:48Z',
  hostname: 'localhost',
  score: 0.9,
  action: 'submit'
}
```