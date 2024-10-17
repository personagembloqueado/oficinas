import { Schema, model } from 'mongoose';
import vehicleSchema from './vehicleModels.js';
import workshopSchema from './workshopModel.js'

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'vehicle',
        required: true
    },
    services: {
        type: [{
            nome: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }],
        ref: 'Maintenance',
        required: true


    },

    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
});

export default model('Maintenance', maintenanceSchema);
