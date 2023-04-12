# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The Social Network API project is meant to demonstrate the basic back-end functionality for a social media website. It uses Mongoose to connect the Express.js API to a MongoDB database containing data about users of the social media site and their thoughts. This connection allows a back-end user to 1) view all users and thoughts stored in the database, 2) view an individual user or thought, 3) create a new user or thought, 4) update an existing user or thought, 5) delete an existing user (and their associated thoughts) or thought, 6) add and remove friends from a user's list of friends, and 7) add and remove reactions from a thought's list of reactions.

I was motivated to create this application because it is important to be able to manipulate the data stored in MongoDB on the back end when a user needs to perform CRUD operations (Create, Read, Update, Delete), which will then propagate to the front end. Social media is a huge sector of the tech world, and being able to see how a user's data relates to one another, as well as how to make changes to that data, will be key if I end up working for a social media company. 

Through working on this project, I have learned how to use Mongoose to connect an Express API to a MongoDB database and create the models and functions to organize and manipulate the data stored in that database. Some of the biggest points of learning include:
* Setting up Models, Schemas, and schemas for subdocuments
* Using getters to format data differently in the JSON responses than they are actually stored in MongoDB (namely dates)
* Creating virtuals for data manipulations we will need often instead of calling methods to perform the actions
* Utilizing .populate and .select when performing GET operations to bring in related data and display the data in more user-friendly formats
* Performing two-part actions when a POST or DELETE operation on one model needs to change something about the data stored in a related model

## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Video Demonstration](#video-demonstration)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation 
            
1. Install Node.js and MongoDB, following the respective documentation to get them set-up
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/Social-Network-API.git
   ```
3. Install the dependencies included in the package.json
   ```sh
   npm i
   ```
4. Start the server by using the following command in the command-line
   ```sh
   npm start
   ```
    
## Usage
    
The Social Network API project functions as a command-line application. After following the installation instructions above, the server will be running and users can test the API endpoints via Insomnia to see the JSON responses they generate. Users will be able to perform GET, POST, PUT, and DELETE operations on both User and Thought data stored in MongoDB collections. 

## Video Demonstration

Please review the [demonstration video](https://drive.google.com/file/d/1s9C0J5U4Zaa1ejMTVhTg4p7wSvJ-G_zW/view) to see how the app functions.   

## Credits

Node packages used:
  - mongoose
  - express
  - dayjs

*Code included in setup files such as config/connection.js, index.js, routes/index.js, routes/api/index.js are borrowed from in-class activities.*

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A

## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)