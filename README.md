# Angular Tweet Viewer
An app for viewing twitter tweets with functionalities such as:
- Dynamic ordering of users tweet columns
- Filtering of users tweets by date and number of tweets to show
- Changing of application theme from colored to contrast (black and white)
- Toggling of page mode between *VIEW* and *EDIT* mode

#### View with a colored theme (Default Skin)
![Angular Tweet Viewer](screen_colored_theme.png?raw=true "Colored")

#### View with black and white theme (Contrast Skin)
![Angular Tweet Viewer](screen_black_and_white.png?raw=true "Contrast")

### Requirements
- NodeJS and NPM

### Installation
- Clone this repository `git clone git@github.com:ekundayo-ab/angular-tweets-viewer.git`
- Rename `.env.sample` file to `.env` and include the credentials gotten from your twitter developer application.
- `cd` into project directory on the terminal `cd angular-tweets-viewer`
- Install dependencies `npm install`

### Running the Application
This application consists of two parts which are
1. The Express server which gets the data from the twitter API through the TWIT package and
2. The Angular client application which connects to the server to get and show the tweets

To get both parts running and also view the application on the browser follow steps below:
- Type and enter `npm run server` to start the server
- On another terminal window, type and enter `npm run client` or `npm start` to start the Angular client application
- Visit the your browser from the url provided on the terminal e.g `http://localhost:4200` you should see the application.

Play around with it!
