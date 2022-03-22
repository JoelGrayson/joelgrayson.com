# Description: copy all files over. Build & Start

# Alpine is light-weight
FROM node:16-alpine
WORKDIR /app
# Copy everything over
COPY . ./

RUN npm install
RUN npm run build

CMD ["npm", "start"]