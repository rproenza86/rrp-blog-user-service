# node-blog-api

This is just a simple API written in Node/Express for a blog. I am using `.ts` extensions simply to use ES6. **Note:** I will be removing this now that Node 8+ supports ES6. If you want to see a real TypeScript API, check out my other repo <a href='https://github.com/iamclaytonray/tes'>here.</a>

### Get Started:
`git clone https://github.com/iamclaytonray/node-blog-api.git`

`cd node-blog-api `

### Yarn

`yarn`

`yarn build`

`yarn start`

### NPM

`npm install`

`npm run start`

# Build docker image
`docker build -t rproenza86/rrp-blog-user-service:v1.1.0 .`

# Run docker image
`docker run -p 3002:3002 -d rproenza86/rrp-blog-user-service`

# Delete image
`docker rmi -f rproenza86/rrp-blog-user-service`

kubectl create secret docker-registry private-registry-key --docker-username="rproenza86" --docker-password="VilIt2l0" --docker-email="rproenza86@gmail.com" --docker-server="https://index.docker.io/v1/"
