require('dotenv').config();
const cors = require('cors');
const express = require('express');
const sequelize = require('./bd/conexion');
const Products = require('./models/Products');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/avg-value-by-category', async (req, resp) => {
  try {
    const data = await Products.findAll({
      attributes: [
        'category_code',
        [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio'],
      ],
      group: ['category_code'],
      order: [['category_code', 'ASC']],
    });

    if (data.length === 0) {
      return resp.status(404).json({
        message: 'No se encontraron datos en la tabla products',
      });
    }

    return resp.status(200).json(data);
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al obtener el promedio de valor por categoría',
      error: error.message,
    });
  }
});

app.get('/api/count-products-by-brand', async (req, resp) => {
  try {
    const data = await Products.findAll({
      attributes: [
        'brand_code',
        [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_productos'],
      ],
      group: ['brand_code'],
      order: [['brand_code', 'ASC']],
    });

    if (data.length === 0) {
      return resp.status(404).json({
        message: 'No se encontraron datos en la tabla products',
      });
    }

    return resp.status(200).json(data);
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al obtener la cantidad de productos por marca',
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});