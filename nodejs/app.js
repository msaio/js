const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const navigator = require('./navBar.js');
const bookRouter = require('./src/routes/bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Show log information:
// Combined: full
// tiny: simple
app.use(morgan('tiny'));

// Serving static file in publoc folder
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd')));
// Add view dir
app.set('views', './src/views');
// ejs as template
app.set('view engine', 'ejs');

// Routing for root
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: navigator,
      title: 'Library',
    },
  );
});

// Add bookRouter routing
app.use('/books', bookRouter);
/*
bookRouter is a router :)
It starts with / and then /single
When adding to app by app.use(...) and bla bla like /books
It comes after root/books/ and root/books/single
*/

// Add listener for website
app.listen(port, () => {
  // console.log('Listening on port ' + chalk.green('3000...'));
  // debug module make it look cleaner
  // chalk module make it look prettier with color
  debug(`Listening at port ${chalk.green(`${port}...`)} motherfucker`);
  debug(`${navigator.length}`);
  debug(`${bookRouter}`);
});
