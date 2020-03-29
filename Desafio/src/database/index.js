import Sequelize, { Model } from 'sequelize';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import databaseConfig from '../config/database';

//Um vetor com todos os models criados
//No caso só foi criado um model
const models=[User,Recipient];

class Database{
    constructor(){
        this.init();
    }
    init(){
        this.connection=new Sequelize(databaseConfig);
        //Para todos os models do vetor é executado a função init
        models.map(model=>model.init(this.connection));
    }
}
//Essa instancia será executada em app.js
export default new Database();