# Introduction Grafana Loki - README

This document provides instructions for setting up and running Loki, a horizontally scalable log aggregation system developed by Grafana.

# Getting Started
Prerequisites
Make sure you have the following installed on your system:
 .	Docker and Docker Compose: Loki and Grafana are easily run using Docker.

Installation

1.	Installing Grafana
First, we need to install Grafana. You can install Grafana using Docker, as follows:
bashCopy code
docker run -d -p 3000:3000 grafana/grafana 
You should now be able to access Grafana at http://localhost:3000 in your web browser.
2.	Clone the Loki Repository (optional)
You can skip this step if you prefer to directly download Loki and Grafana.
bashCopy code
git clone https://github.com/grafana/loki.git 


# Build and Test

3.	Running Loki and Promtail
With Docker and Docker Compose installed, you can use the docker-compose.yaml file included in the Loki repository to start Loki and Promtail.
bashCopy code
cd loki docker-compose pull docker-compose up 
This will start Loki and Promtail. Loki is now ready to receive logs.
Adding a Loki data source in Grafana
1.	Access Grafana at http://localhost:3000 in your web browser.
2.	Log in with the default Grafana credentials (admin:admin).
3.	Navigate to "Configuration" -> "Data Sources" via the Grafana UI.
4.	Click "Add data source" and select Loki from the list of available data sources.
5.	In the URL field, enter http://localhost:3100.
6.	Click "Save & Test" to save the configuration.
You should now be able to explore your logs using the Grafana Explore view.

# Commom problems / Future changes

Sometimes, it's needed to run a comand to make the Loki/Promtail be ready.
Run http://localhost:3100/ready, wait 15 seconds and run again. You should receive a 'ready' status.

Loki is not created Labels, so when you add the Loki conection on grafana, it'll return an warning telling you the Loki is conected, but there is no Label.
