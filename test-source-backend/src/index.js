import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';
import Address from './types/address';
import Document from './types/document';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    req.context = {
        models,
    };
    next();
});

app.use('/farmers', routes.farmer);


const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
        initialDatabaseData();
    }

    app.listen(process.env.PORT, () =>
        console.log(`Listening on port ${process.env.PORT}!`),
    );
});

const initialDatabaseData = async () => {
    const initialFarmers = [
        {
            name: 'Joao Silva',
            address: new Address('Rua Sei Lá, 999', 'SP', '', 'Brasil'),
            document: new Document('49622897053', 'cpf')
        },
        {
            name: 'Maria Jose',
            address: new Address('Av Qualquer Coisa, 10000', 'RJ', '', 'Brasil'),
            document: new Document('76902496048', 'cpf')
        },
        {
            name: 'Jose William',
            address: new Address('Rua Agora Vai, 6658', 'SC', '', 'Brasil'),
            document: new Document('17400617052', 'cpf')
        }
    ];

    await models.Farmer.findOrCreate(

        {
            where: { name: initialFarmers[0].name },
            defaults: initialFarmers[0]
        }
    );
    await models.Farmer.findOrCreate(

        {
            where: { name: initialFarmers[1].name },
            defaults: initialFarmers[1]
        }
    );
    await models.Farmer.findOrCreate(

        {
            where: { name: initialFarmers[2].name },
            defaults: initialFarmers[2]
        }
    );



};