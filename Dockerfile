FROM bitnami/minideb:stretch

# Release version


# Node version. For more info: https://github.com/nodesource/distributions/tree/master/deb
ENV NODE_VERSION=setup_8.x

# Update and install packages
RUN apt-get update && apt-get install -y \
    --no-install-recommends \
    openjdk-8-jre-headless \
    gnupg \
    curl \
    chromium

# Install nodejs, npm and yarn
RUN curl -sL https://deb.nodesource.com/${NODE_VERSION} | bash - && \
    apt-get install -y nodejs npm yarn

# Copy package.json to temp folder
COPY package.json /tmp/

# Install node dependencies
RUN cd /tmp && npm install

# Set working directory and copy source
WORKDIR /app
COPY . /app

# Move compiled node modules back
RUN mv /tmp/node_modules node_modules

# Run start command
CMD ["npm", "run","tests"]
