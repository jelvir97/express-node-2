### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
- It is an encoded string meant to be send with http requests so that there is user data persistence in a web app. It is made up of a header, payload and a signature. Often set as a cookie in the browser.

- What is the signature portion of the JWT?  What does it do?
- The signature portion is signed using a secret key. It doesn't encrypt the data but rather it tells where the JWT came from. If the secret key matches the secret key in the server then it means the jwt originated from the server. If id doesn't then it is likely a fraudulent attempt at authentication.

- If a JWT is intercepted, can the attacker see what's inside the payload?
- Yes the data is not meant to be encrypted. The purpose is to know if the data was tampered with after the token was signed by the server.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- You set a cookie in the browser with the token containing a payload with the user's information. The token is signed by the server using a secret key. With every request that is made, you validate the token to see if it originated from this server. If it did, the user remains logged in and maintains the authorizations that they may have. If not, the user is logged out because it means the jwt was tampered with and is likely a fraudulent attempt to log in.

- Compare and contrast unit, integration and end-to-end tests.
- Unit testing is pertains to the testing of individual functions and making sure that unit of code is doing what it is supposed to do. Integration testing tests multiple parts of the codebase to make sure it is all working together as it should be. End to end tests, test the whole application to make sure that it all works, especially from a users view. It often includes testing of click events and changes to html on a webpage.

- What is a mock? What are some things you would mock?
- A mock is when you simulate what a function would do in order to test another feature that uses that function. The mocked function tends to increase run time and usually is not something that is created by the developer of the application. Somethings you would mock would be requests to external apis, which you would assume work already, or parts of libraries/modules that you are using that can unnecessarily increase test runtime.
- What is continuous integration?
- Continuous integration is the cycle of development and testing that is used to integrate code that multiple people are working on. A developer is required to pass tests locally before they merge their code base into the main dev branch.

- What is an environment variable and what are they used for?
- Environment variables are variables that the app can use but are not necessarily hardcoded into the codebase. They tell the application how to run certain operations such as tests. They are used for designating routes to specific databases, establishing testing environments and providing secret keys and tokens for access to different things

- What is TDD? What are some benefits and drawbacks?
- TDD stands for test driven development. Drawbacks are that it slows development down. Benefits are that it makes the codebase more reliable and makes it easier to keep code and tests consistent. It's easier to write code when you know what the passing conditions are for tests.

- What is the value of using JSONSchema for validation?
- JSON schema make it really easy to validate date. It allows for really specific validation requirements and helps abstract code out of view functions. It's also easy to implement in multiple places.

- What are some ways to decide which code to test?
- You would want to test things that, if they were to change, they would break the code base. Functions or resources that are relied upon by other code features. Things that are prone to errors are have the possibility of throwing errors with weird edge cases.

- What does `RETURNING` do in SQL? When would you use it?
- It returns named columns from sql queries that don't normally return anything such as Insert, Update, or Delete.

- What are some differences between Web Sockets and HTTP?
- Web sockets maintain persistence because they don't close a connection with a request. THe connection stays open until it is manually closed. THey are also lighter weight in that they don't have as much information sent with each request. HTTP is stateless and the connection does not stay open after a request. THerefore there is a lot more information sent with an HTTP request ie. cookies/headers, in order for there be some sort of state between multiple requests.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
-I think I liked using express more, mainly because of the routers. It makes it a lot easier to build bigger applications. I also liked testing applications with jest better than with python. I also like how much easier it is to implement middleware for authentication.
