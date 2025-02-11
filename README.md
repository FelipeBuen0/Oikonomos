# Oikonomos

A responsive ExtJS TaskManager application created for Sencha's Webinar about responsiveness. This application demonstrates modern desktop application development using ExtJS framework with a Material theme.

Why Oikonomos you ask? 

In ancient Greece, a man who oversaw and managed tasks for his employees, particularly in a household or estate, was called an "oikonomos" (οἰκονόμος). The term comes from oikos (household) and nomos (law or management), meaning "household manager" or "steward."

## Prerequisites

Before running this application, make sure you have the following installed:
- [Sencha Cmd](https://www.sencha.com/products/extjs/cmd-download/)
- [Node.js](https://nodejs.org/)
- ExtJS 7.x Framework

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FelipeBuen0/TaskManager.git

cd TaskManager
```
## Install dependencies:

``` bash
npm install
```
Development Environment setup to run the application in development mode

## Open your terminal in the project directory
Run the following command:
```bash
sencha app build

sencha app watch --dev
```

<h3>This will:</h3>

Build the application
Start a development server
Watch for changes in your code
Automatically rebuild when changes are detected
The application will be available at http://localhost:1841 (default port)

## Application Configuration 

The application uses:

- ExtJS Modern Toolkit
- Material Theme
- Font Awesome for icons
- SCSS for styling

## Project Structure
-  /app - Contains the application source code
- /sass - Contains SCSS styling files
- /resources - Static resources and assets

## Building for Production
To create a production build:

```bash
sencha app build production
```
The production build will be created in the build directory specified in your app.json configuration.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Additional Resources
- <a href="https://docs.sencha.com/extjs/7.8.0/"> ExtJS Documentation </a>
- <a href="https://docs.sencha.com/cmd/7.8.0/"> Sencha Cmd Guide</a>