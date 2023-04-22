import React from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">DOS.py</h2>
        <pre className="file-display-content">
          <code>
            {`
import requests

# specify the IP address and the number of requests to send
#Reminder: this is only for eductional use and should not be used if used, use at YOUR OWN risk and fault
#and if anything wrong or unexpected occours that is YOUR fault 
ip_address = "put_ip_adress_here" 
num_requests = 100

# create a session object to reuse the same underlying TCP connection
session = requests.Session()

# send a GET request to the specified IP address num_requests times
for i in range(num_requests):
    try:
        # send a GET request using the session object
        response = session.get(f"http://{ip_address}")
        # print the status code of the response for each request
        print(f"Request {i+1} sent with status code {response.status_code}")
    except requests.exceptions.RequestException as e:
        # if the request fails, log the error message to a file
        with open("errors.log", "a") as f:
            f.write(f"Request {i+1} failed with error {e}\n")

            `}
          </code>
        </pre>
      </div>

      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">Denial Of Service Attack (DOS)
        This code is written in Python and uses the requests library to send HTTP requests to a specified IP address. It sends a GET request to the IP address specified in the variable ip_address a total of num_requests times.
<br/>
<br/>
The code creates a session object using the requests.Session() method, which allows the same underlying TCP connection to be reused for all requests. This can improve performance, especially when making multiple requests to the same server.
<br/>
<br/>
A for loop is used to send the requests num_requests times. Each time through the loop, a GET request is sent to the specified IP address using the session.get() method, and the response is stored in the response variable.


        </p>
        {/**
         The first line of the code imports the requests library. This library allows us to make HTTP requests and interact with web pages or APIs. In this case, we're using it to send GET requests to a specific IP address.

Next, we set the IP address we want to send requests to and the number of requests we want to send. These are stored in the variables ip_address and num_requests, respectively.

The code then creates a Session object using requests.Session(). This session object allows us to reuse the underlying TCP connection for all requests, which can improve performance by avoiding the overhead of creating a new connection for each request.

The for loop is used to send a total of num_requests GET requests to the specified IP address. The range() function is used to create a sequence of numbers from 0 to num_requests-1, and the loop variable i is assigned each of these values in turn.

For each iteration of the loop, the code sends a GET request to the IP address specified in ip_address using the session.get() method. The f string notation is used to insert the value of ip_address into the URL for each request. The response from the server is stored in the response variable.

After sending each request, the code prints a message to the console indicating the status code of the response. This is done using the print() function and the f string notation to insert the values of i and response.status_code.

If any errors occur during the requests, they will be caught by the try/except block. The except block logs the error message to a file called "errors.log". This is done using the with statement and the "a" flag to open the file in append mode. The error message is written to the file using the write() method of the file object.
         */}
      </div>
    </div>
  );
};

export default FileDisplaykey;
