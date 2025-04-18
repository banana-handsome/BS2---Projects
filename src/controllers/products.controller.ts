import { getModel, addModel, deleteModel, updateModel } from "../supabase/model/products.model";
import type { Context } from "hono";

/***
 * @returns Json array
 * @request false
 * @method  GET
 * @path    /api/products/get
**/
async function getController(x: Context) 
{
    try
    {
        return x.html(`Welcome to BS3 Framework!`);
    } 
    catch(error)
    {
        
    } 
};

/***
 * @returns Json array
 * @request true
 * @method  POST
 * @path    /api/products/add
**/
async function addController(x: Context) 
{
    try
    {
        
    }
    catch(error)
    {
        
    } 
};

/***
 * @returns Json array
 * @request true
 * @method  DELETE
 * @path    /api/products/delete
**/
async function deleteController(x: Context) {
    try
    {
        
    }
    catch(error)
    {
        
    } 
};

/***
 * @returns Json array
 * @request true
 * @method  PUT
 * @path    /api/products/get
**/
async function updateController(x: Context) {
    try
    {
        
    }
    catch(error)
    {
        
    } 
};

export { getController, addController, updateController, deleteController };