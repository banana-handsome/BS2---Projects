import { Hono } from "hono";
import { addController, deleteController, getController, updateController } from "../controllers/products.controller";

// products service subpath
const productsServices = new Hono();

/**
 *  @method GET
 *  @path   /api/products/get 
**/
productsServices.get('/welcome', getController);
/**
 *  @method POST
 *  @path   /api/products/add
**/
productsServices.post('/add', addController);
/**
 *  @method DELETE
 *  @path   /api/products/delete
**/
productsServices.delete('/delete', deleteController);
/**
 *  @method PUT
 *  @path   /api/products/delete
**/
productsServices.put('/update', updateController);


// Export ke app.index
export { productsServices };