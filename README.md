<h1 align="center">
     SmartFleet
</h1>

---
<h1 align="center">
    <img src="https://img.shields.io/static/v1?label=JavaScript&message=Lenguage&color=yellow&style=for-the-badge&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=TypeScript&message=Lenguage&color=blue&style=for-the-badge&logo=typescript"/>
    <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
    <img src="https://img.shields.io/static/v1?label=Tailwindcss&message=styless&color=06B6D4&style=for-the-badge&logo=tailwindcss"/>
</h1>

---

### Prerequisites
- [NodeJs LTS+](https://nodejs.org/en/)
- [Vite](https://vitejs.dev/)

### Getting started

Clone the project and access the folder

```bash
 $ git clone https://github.com/phmprojetos/smartfleet-plataform-frontend.git
```

Download the dependencies and then run the app

```bash
# Install the dependencies
$ npm install

# Start the project
$ npm run dev
```

#### Routes
```
# Dashboard
http://localhost:5173/

# Fines
http://localhost:5173/fines
```

### Docker

The application can run in a container using the Dockerfile. To run the application, first create the image as follows:
```
docker build -t <user>/<image_name>:version .
```

The construction of the image executes a Build of the react application, which runs on port 80. I emphasize that the execution of the following command sets the API address as the default, which is the ip of the json-server moked data.
```
docker container run -d -p 8080:80 --name reactapp <user>/<image>:latest
```

To make the application communicate the correct API address, must pass the following argument when building the image:
```
docker build --build-arg API=https://api.host.com:xxxx -t <user>/<image_name>:version .
```
