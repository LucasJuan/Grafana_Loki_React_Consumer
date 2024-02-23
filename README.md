# Grafana Loki Setup with React Example and Nginx Configuration

This repository provides an example setup for configuring Grafana Loki, along with a React application demonstrating how to send logs to Loki. Additionally, it includes a basic Nginx configuration to serve as a reverse proxy for accessing Loki.

## Grafana Loki Configuration

1. Install Grafana Loki: Follow the official [Grafana Loki installation guide](https://grafana.com/docs/loki/latest/installation/) to set up Loki on your server.

2. Configure Loki: Customize your Loki configuration according to your requirements. The configuration file is typically named `loki-local-config.yaml`.

3. Start Loki: Run the Loki instance using the following command:

    ```bash
    loki --config.file=loki-local-config.yaml
    ```

## React Example for Sending Logs to Loki

1. Clone this repository:

    ```bash
    git clone https://github.com/example/react-loki-logs.git
    cd react-loki-logs
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure Loki Endpoint: Open the `.env` file and set the `REACT_APP_LOKI_ENDPOINT` variable to the Loki HTTP endpoint.

4. Run the React App:

    ```bash
    npm start
    ```

    This will start the React app, and you can explore how logs are sent to Loki.

## Nginx Configuration

Assuming you have Nginx installed, add the following server block to your Nginx configuration file (e.g., `/etc/nginx/sites-available/default`):

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Headers' 'Authorization, Accept, Origin, DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Content-Range, Range';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE, PATCH';
            add_header 'Content-Type' 'application/json';
            add_header 'Content-Length' 0;
            return 204;
        }

        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Headers' 'Authorization, Accept, Origin, DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Content-Range, Range';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE, PATCH';

        proxy_pass http://loki:3100;
    }
}
