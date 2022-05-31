# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

COPY ./package*.json ./

# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

RUN yarn build

# Expose the listening port
EXPOSE 7999

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
#CMD [ "npm", "run express" ]
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]


