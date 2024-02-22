import express, { Express } from 'express';
import { Router, Request, Response } from 'express';


export default class Application {
    
    static execute() 
    {

        const server = express();
        server.use(express.json())
        server.use(
            Router().get('/', (_: Request, res:Response) => {
                res.json({
                    message: 'olá, Adão 3'
                });
            })
        );
        
        server.listen(process.env.PORT, () =>{
            console.log( `\x1b[32mWeb Server running at \x1b[37m${process.env.PORT}` );
        });
    }
}