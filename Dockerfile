# Use a Node.js base image
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "start:dev"]

###################
# Build for production
###################
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY --from=development /usr/src/app ./

# Run the build command which creates the production bundle
RUN yarn build

# Install only production dependencies
RUN yarn install --production --frozen-lockfile && yarn cache clean

# Set the NODE_ENV environment variable
ENV NODE_ENV=production

###################
# Production
###################
FROM node:18-alpine AS production

WORKDIR /usr/src/app

# Copy the bundled code from the build stage
COPY --from=build /usr/src/app ./

EXPOSE 3000

# Start the server using the production build
CMD ["node", "dist/main"]
