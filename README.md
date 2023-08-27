# RapidFort Assignment


## Getting Started 
- The application contains a web-server which will take input of a file and will disply the details of the file. 
- This also include a ***simple UI, script to run docker continers, manifest files to run kubernetes cluster***

## API Description 
- The API takes the file uploads and send back the details about the file. The API is serving a web-page which has a very informative and simple UI. 
- The API is set up with a github action configured which on every push into the master branch will update/build the docker image and push the image to dockerHub.


##### POST
For the POST request, the API will take the input file as the request parameter and will then upload the file in `./uploads` folder. 

**Route** for he POST request is `/uploads`
**Status for successfull upload** of file is `file uploaded successfully` as a response to the client.

##### GET
**Route** for he POST request is `/getinfo/${filename}`
**Status for successfull request** of file is the `fileinfo` object which is sent to the client as a response to display on the web-page.

**Status for failed request** is ***Status Code 400*** with a response `file not found` sent to the client. 

### Steps to run the server in the docker container
If building the application on your local machine, make sure you have downloaded and installed: 
- nodeJS (LTS Version)
- npm (comes with node package)

Run `npm install` and then `npm run start` to start the server on the local machine.

### Steps to run the server in the docker container using the bash script provided 
  - Make sure you have docker installed. Follow the [link](https://docs.docker.com/engine/install/) to install docker.
- In the terminal run `bash script.sh`

