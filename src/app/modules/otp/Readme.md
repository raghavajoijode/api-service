## http://localhost:3000/api/otp
```[
    {
        "otp": 402326,
        "generatedDate": 1659791105172,
        "mobileNumber": "test"
    }
]```

## http://localhost:3000/api/otp/${nobileNumber}

```{
    "otp": 402326,
    "generatedDate": 1659791105172,
    "mobileNumber": "${mobileNumber}"
}```


## http://localhost:3000/api/otp/validate/${mobileNumber}?otp=${OTP}

```{
    "success": false,
    "message": "invalid request"
}

{
    "success": false,
    "message": "OTP expired"
}

{
    "success": true,
}```