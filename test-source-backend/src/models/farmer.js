const { Op } = require("sequelize");
const JsonField = require('sequelize-json');

const farmer = (sequelize, DataTypes) => {
  const Farmer = sequelize.define('farmer', {
    name: {
      type: DataTypes.STRING
    },
    document: JsonField(sequelize, 'farmer', 'document'),
    address: JsonField(sequelize, 'farmer', 'address')
  });

  Farmer.findByNameOrDomument = async nameOrDocument => {
    var farmerReturn = await Farmer.findAll({
      where: {
        name: {
          [Op.iLike]: '%'+nameOrDocument+'%'
        }
      },
    });

    if (!farmerReturn || farmerReturn.length <= 0) {
      farmerReturn = await Farmer.findAll({
        where: {
          document: {
            [Op.iLike]: '%'+nameOrDocument+'%'
          }
        },
      });
    }

    return farmerReturn;
  };

  return Farmer;
};

export default farmer;
