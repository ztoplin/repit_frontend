# Rep-it NYC! --- A Municipal Civic Education App

Rep-it NYC! is a civic education and accessibility application that returns a list of all of a user-specific elected representatives, complete with descriptions of their respective responsibilities, contact information, and links to their websites, social media, community board sites and various demographic and health report data.

Written using React.js

Link for the backend repository: https://github.com/ztoplin/repit_backend

## Installation/Startup

Run npm install in your terminal for all dependencies.

```bash
npm install
```

Then run npm start to run the app in your browser.
```bash
npm start
```

## Usage

Once both the frontend and backend servers are running, enter any New York City address into the search bar. The address should be formatted as 'Number Street, Borough/City, NY', i.e. '123 Oak Street, Brooklyn, NY'.

The topmost, Community District, card subesquently displayed will have links to the Community Board Website, Community Health Report, and Community Demographics Page respective to the entered address.

The Office cards displayed underneath will have information regarding each office, with a dropdown that includes info on the officeholders' respective responsibilities. Also, each card will have links to the officeholders' relevent websites, Facebook, and Twitter pages.

The Login at the top is for admins, i.e. those who already have the password and are granted the ability to edit the Office descriptions.
  

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.



## License

No License
