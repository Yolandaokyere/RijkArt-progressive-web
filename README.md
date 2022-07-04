## 📱 ArtLibrary progressive web app
![2022-04-08 (6)](https://user-images.githubusercontent.com/97689634/162440074-43b7e5a9-cf68-4a4a-b6cb-92a66c771a05.png)

##### Table of Contents
* [Assesment](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-assesment)
* [Concept](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-concept)
* [Process](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-process)
* [Wishlist](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-wishlist)
* [Installation](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-installation)
* [Recources](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-recources)
* [License](https://github.com/Yolandaokyere/RijkArt-progressive-web/blob/main/README.md#-license)
## 📚 Assesment
In this course we convert the client side web application, made during the Web App From Scratch course, into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Finally we’ll implement a series of optimisations to improve the performance of the application.

## Node-JS
* Node-JS is an open source runtime environment for excuting JavaScript code outside of a browser. 
* Node-packages used for this project:
1. Dotenv zero-dependency module that loads variables from the .env file into process.env. Here you can store configuration, local host, passkeys  and more. 
1. Node-fetch to fetch API directly
1. Express defines a routing table which is used to perform different actions based on HTTP Method and URL. It allows to dynamically render HTML Pages based on passing arguments to templates.
1. Ejs is a template that I used for this project. 
![2022-03-29 (1)](https://user-images.githubusercontent.com/97689634/160548261-85eb797a-c4cd-430d-b3f5-9d63381b6485.png)


## Fetching data with node-JS
* Fetching API data with the app.GET methode en node-fetch module. Using EJS-template to render files: 
1. ![2022-03-29 (2)](https://user-images.githubusercontent.com/97689634/160596084-d85c37a2-d27b-4509-9698-78e7152e91b4.png)
1. ![2022-03-29 (3)](https://user-images.githubusercontent.com/97689634/160597137-1d08dfad-a9a7-4bca-9662-399fb2e5ea76.png)
1. ![2022-03-29 (4)](https://user-images.githubusercontent.com/97689634/160598228-00dfcf83-1876-4bd4-8fef-1abff760603d.png)

## Convert into a Progressive Web App
The web manifest - a JSONfile that describes the progressive web app. It includes the PWA’s name; information if the app is landscape or portrait; whataccess it needs to the device; its description, screenshots, and icons. 
![2022-03-29 (14)](https://user-images.githubusercontent.com/97689634/160650397-db012fa5-135e-4695-a4a7-bd3f993a3a32.png)
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/97689634/160651425-7dea9107-1a9c-419b-a770-7f4c96f3b3f0.gif)

## Setting up service workers
It is possible to used information that was pre-cashed with server worker. Instead of failing or crashing of when a user is offline, the service worker intercepts the request and acts as a network. It can serve the resource from the cache via the Cache storage API
### 1. Fetch and register 
![2022-04-06](https://user-images.githubusercontent.com/97689634/161864773-22049d51-c133-463d-b199-fe57b75adbf5.png)
![2022-04-06 (1)](https://user-images.githubusercontent.com/97689634/161864880-894f0a7a-8cb0-4b60-9eb9-3c82292af76f.png)
### 2. Install and cache
1. ![2022-04-06 (4)](https://user-images.githubusercontent.com/97689634/161906650-7e1d8748-136b-49c0-a861-c42f269ea196.png)
1. ![2022-04-06 (10)](https://user-images.githubusercontent.com/97689634/161910992-68d29733-f1f3-4324-bfb3-52f1365997da.png)
### 3. Cache
1. ![2022-04-06 (31)](https://user-images.githubusercontent.com/97689634/162048229-dc6aebdd-de43-4013-a9f5-00462b193035.png)

## Lighthouse
Improve performance
# Optimize the performance (Critical Rendering Path)
**Chrome audits results before optimalisation:**
* Prestaties = 36
* [Chrome audits. rijksart.pwa.pdf](https://github.com/Yolandaokyere/RijkArt-progressive-web/files/8435913/Chrome.audits.rijksart.pwa.pdf)

**Chrome audits results after optimalisation**
* Prestaties = 43
* [Chrome audits geoptimaliseerd.pdf](https://github.com/Yolandaokyere/RijkArt-progressive-web/files/8441298/Chrome.audits.geoptimaliseerd.pdf)

## 💡 Activity Diagram
![service worker ](https://user-images.githubusercontent.com/97689634/163757743-33a4b573-ff6d-4547-8b5b-69af6d7e1df1.png)

## 📈 Process
Process in details [click here!](https://github.com/Yolandaokyere/RijkArt-progressive-web/wiki)

## 📝 Wishlist
- [x] **Serverside rendering**
- [x] Render API with node
- [x] Searchbar
- [ ] Detail page
- [ ] Good styling page
- [x] **Service Workers (render browser offline with node)**
- [x] **Critical render path**
- [x] Convert the server to a progressive web app
- [x] **Activity Diagram**
- [ ] License
 
## 🔧 Installation
* Clone onderstaande pad in je terminal
* `gh repo clone Yolandaokyere/RijkArt-progressive-web`



## 🔎 Recources
[YouTube - PWA tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
## 🔖 License

