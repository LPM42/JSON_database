JSON database
======================
How to use:
1. Run server.js with node.
2. Use the chrome browser extension "REST Console" to simulate GET and POST.
(chrome-extension://cokgbflfommojglbmbpenpphppikmonn/index.html#response)

3. In Target Request URI write: http://localhost:3000/IamAFileNameAndContent.
4. Select either POST or GET request.

On POST request: writes a file to hard drive with name 'IamAFileNameAndContent' that contains json data.

On GET request: sends data read from hard drive within 'IamAFileNameAndContent' file.
