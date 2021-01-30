//This is code that's run during page load to check a person's login status.

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//The response object that's provided to your callback contains a number of fields:

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

//This is the callback. It calls FB.getLoginStatus() to get the most recent login state. 
//statusChangeCallback() is a function that's part of the example that processes the response.

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
