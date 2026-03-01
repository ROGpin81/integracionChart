const sequelize = require("../bd/conexion");
const { DataTypes } = require("sequelize");

const Products = sequelize.define(
  "products",
  {
    partNumber: {
      type: DataTypes.TEXT,
    },
    productType: {
      type: DataTypes.TEXT,
    },
    category_code: {
      type: DataTypes.TEXT,
    },
    brand_code: {
      type: DataTypes.TEXT,
    },
    family_code: {
      type: DataTypes.TEXT,
    },
    line_code: {
      type: DataTypes.TEXT,
    },

    productSegment_code: {
      type: DataTypes.TEXT,
    },

    status: {
      type: DataTypes.TEXT,
    },
    value: {
      type: DataTypes.DOUBLE,
    },
    valueCurrency: {
      type: DataTypes.TEXT,
    },

    defaultQuantityUnits: {
      type: DataTypes.TEXT,
    },

    name: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    plannerCode: {
      type: DataTypes.TEXT,
    },
    sourceLink: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Products;