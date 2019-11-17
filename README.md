# PRD-Middleware
A dockerized middleware solution for providing Pathfinder Reference Document data.
The middleware solution takes a dataset in ods format, parses it into Javascript objects and then inserts them into a MongoDB database.
Data from the MongoDB database can then be accessed through a GraphQL interface.

## The data
All data that is currently present in this repository, and thus is used by the middleare solution itself, comes from [The Pathfinder Community](http://www.pathfindercommunity.net/home/databases).

When starting the middleware solution, all data inside the input folder will be parsed to a JSON format, which is then used to populate the MongoDB database.

The middlware solution expects the following files to be present in the input folder.
- monsters.ods
- feats.ods
- spells.ods

The files should be a one-on-one copy from the downloads available from the link above.

## Getting started
Because this is all Docker ready, along with a docker-compose file, all you'll need to do is execute some commands, namely:

`docker-compose build` followed by `docker-compose up`

If you want it all to run on a different port, or add a configuration, feel free to change some stuff in the docker-compose.yml file.

## A different configuration
At the moment, there are two things configurable through a JSON file.
The JSON file is formatted like so:
```json
{
  verbose: true,
  cors_whitelist: []
}
```
When starting, the application looks for a configuration file name `server_config.json` in a folder named `/usr/src/prdMiddleware/config`.
The `/usr/src/prdMiddleware/config` folder is defined as a volume in the Docker file, so you can add that to the docker-compose file and you'll be all set!