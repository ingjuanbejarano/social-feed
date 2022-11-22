# Social Feed

this is a widget that consumes from a local server with the possibility to choose your own server through your own URL, you can also select the amount of elements you want to fetch and render and the time interval you want to fetch the information.

## Setup instructions

Install the dependences and install json-server globally.

```bash
npm install
npm install -g json-server
```

## Usage

If you want to use the application locally without any real server, in the root folder use this command to start the mock database.

```bash
json-server --port 7000 ./mock-db/db.json
```

to use your own server URL and other variables like the number of elements to render and the update interval, in the root folder create a .env file with the following environment variables:

```bash
REACT_APP_FEED_URL=your_url
REACT_APP_AMOUNT_POSTS=any_number
REACT_APP_REFRESH_INTERVAL_MILISECS=a_value_in_miliseconds
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
