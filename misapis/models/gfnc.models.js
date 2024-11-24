import mongoose from "mongoose";

const GfncSchema = new mongoose.Schema({

    Imagen: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Clase: {
        type: String,
        required: true
    },
    Rareza: {
        type: String,
        required: true
    },
    Stats_max: {
        type: {
            HP: String,
            ATK: String,
            ATK_Speed: String,
            Power: String,
            DEF: String,
            DEF_Penetration: String,
            Crit_Rate: String,
            Crit_Damage: String,
            After_Battle_Recovery: String
        },
        required: true
    },
    Stats_min: {
        type: {
            HP: String,
            ATK: String,
            ATK_Speed: String,
            Power: String,
            DEF: String,
            DEF_Penetration: String,
            Crit_Rate: String,
            Crit_Damage: String,
            After_Battle_Recovery: String
        },
        required: true
    },
    Skills: {
        type: [
            {
                Nombre: {
                    type:String, 
                    required: true
                },
                Descripcion: {
                    type:String, 
                    required: true
                },
            }
        ],
        required: true
    }
})

const Gfnc = mongoose.model('Gfnc', GfncSchema);

export default Gfnc;