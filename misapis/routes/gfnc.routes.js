import { Router } from "express";
import { getAllGNFC, getGNFCByID, putGNFC, postGNFC, deleteGNFC } from "../controllers/gfnc.controllers.js";

const gfnc = Router()

gfnc.get('/', getAllGNFC)

gfnc.get('/:id', getGNFCByID)

gfnc.put('/:id', putGNFC)

gfnc.post('/', postGNFC)

gfnc.delete('/:id', deleteGNFC)

export default gfnc