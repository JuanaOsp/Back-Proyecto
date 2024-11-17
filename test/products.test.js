const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const mongoose = require('mongoose');
const app = require('../server'); // Replace with the actual path to your app file
const Product = require('../models/Product');

chai.use(chaiHttp);
chai.use(require('sinon-chai'));
const expect = chai.expect;

describe('Product API', () => {
    let sandbox;
    let dbConnection;
  
    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });
    
  
    afterEach(() => {
      sandbox.restore();
    });
  
    describe('GET /api/products', () => {
      it('should fetch products from the database', async () => {
        const mockProducts = [
          { _id: '1', name: 'Product 1', price: 10 , description : 'pruebaa' },
          { _id: '2', name: 'Product 2', price: 20 , description : 'pruebaa2'  }
        ];
  
        sandbox.stub(Product, 'find').resolves(mockProducts);
  
        const response = await chai.request(app).get('/api/products');
  
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(mockProducts);
      });
  
      it('should handle errors and return status 500', async () => {
        sandbox.stub(Product, 'find').rejects(new Error('Database error'));
  
        const response = await chai.request(app).get('/api/products');
  
        expect(response.status).to.equal(500);
        expect(response.body).to.deep.equal({ error: 'An error occurred while fetching products' });
      });
    });
  
    // ...
  });
  