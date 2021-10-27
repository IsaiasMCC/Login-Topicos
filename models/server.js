const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        //meddleawares
        this.middleawares();
        //routes
        this.routes();

    }


    middleawares(){
        // CORS
        

        //static
        this.app.use( express.static('public'));
        
        //formato
        this.app.use(express.json());

    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server running on PORT ${this.PORT}`);
        })
    }
}

module.exports = Server;