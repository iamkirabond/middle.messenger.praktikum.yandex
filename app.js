(function () {
    console.log('we here')
    const express = require('express')
    const app = express()
    const handlebars = require('express-handlebars')

    const port = 3000

    app.engine(
    'handlebars',
    handlebars({ defaultLayout: 'main' })
    )
    app.set('views', './src/views')
    app.set('view engine', 'handlebars')

    app.get('/', (req, res) => {
    res.render('homepage', { title: 'Greetings form Handlebars' })
    })

    app.listen(port, function() {
        console.log('ready to go!');
    });
})();
