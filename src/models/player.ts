import mongoose = require('mongoose');

import { IRecord } from './record';
var playerSchema = new mongoose.Schema({
    currentRecord: { type: mongoose.Schema.Types.ObjectId, ref: 'Record' },
    records: { type: [String], default: [] },
    name: { type: String },
    gender: { type: String, default: '男' },
    phone: { type: String },
    password: { type: String },
    tagSignValues: { type: String },
    tagLikeValues: { type: String },
    tagSpecialValues: { type: String },
    tagStateValues: { type: String },
    age: Number,
    height: Number,

    anwsers: {
        type: [{
            question: String,
            value: String,
            fullLength: Number
        }]
    },
    creatDt: { type: Date, default: Date.now },
    filterAge: {
        type: {
            label: String,
            value: String
        }
    },
    filterGender: {
        type: {
            label: String,
            value: String
        }
    },
    filterCity: {
        label: String,
        value: String
    }
});


/**
 * 数据实体层
 */
interface IPlayer extends mongoose.Document {
    currentRecord: IRecord;

}

var playerModel = mongoose.model<IPlayer>('Player', playerSchema);

export { playerModel, IPlayer }