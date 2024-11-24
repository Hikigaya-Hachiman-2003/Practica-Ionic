import Gfnc from '../models/gfnc.models.js';
import mongoose from 'mongoose'

export const getAllGNFC = async (req, res) => {
    console.log("Obtiene todos los GFNC");
    try{
        const gfnc = await Gfnc.find({},{__v:0});
        if(gfnc.length === 0){
            return res.status(404).json({
                msg: "No se encontraron ejemplos"
            });
        }
        return res.status(200).json({
            gfnc
        });
    }catch (error) {
        res.status(500).json({
            msg: "Error al obtener los ejemplos"
        });
    }
};

export const getGNFCByID = async (req, res) => {
    console.log("GFNC por id");
    const id  = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                msg: "Id no valido"
            });
        }

        const ejemplo = await Gfnc.findById(id);
        if(!ejemplo){
            return res.status(404).json({
                msg: "Ejemplo no encontrado"
            });
        }

        return res.status(200).json({
            ejemplo
        });

    }catch (error) {
        res.status(500).json({
            msg: "Error al obtener el GFNC"
        });
    }
};

export const postGNFC = async (req, res) => {
    console.log("Post GFNC");
    const body = req.body;
    const ejemplo = new Gfnc(body);
    try{
        const validationError = ejemplo.validateSync();
        if(validationError){
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                errors: errorMessages
            });
        }

        await ejemplo.save();
        return res.status(201).json({
            msg: "GFNC guardado correctamente",
            ejemplo
        });
    }catch (error) {
        return res.status(500).json({
            msg: "Error al guardar el GFNC"
        });
    }
};

export const putGNFC = async (req, res) => {
    console.log("Put GFNC");
    const id = req.params.id;
    const body = req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                msg: "Id no valido"
            });
        }

        const ejemplo = await Gfnc.findByIdAndUpdate(id, body, {new: true, runValidators: true});
        if(!ejemplo){
            return res.status(404).json({
                msg: "GFNC no encontrado o actualizado"
            });
        }

        return res.status(200).json({
            msg: "GFNC actualizado correctamente",
            ejemplo
        });
    }catch (error) {
        return res.status(500).json({
            msg: "Error al actualizar el GFNC"
        });
    }
};

export const deleteGNFC = async (req, res) => {
    console.log("Delete GFNC");
    const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                msg: "Id no valido"
            });
        }

        const ejemplo = await Gfnc.findByIdAndDelete(id);
        if(!ejemplo){
            return res.status(404).json({
                msg: "GFNC no encontrado o eliminado"
            });
        }

        return res.status(200).json({
            msg: "GFNCeliminado correctamente",
            ejemplo
        });
    }catch (error) {
        return res.status(500).json({
            msg: "Error al eliminar el GFNC"
        });
    }
};  