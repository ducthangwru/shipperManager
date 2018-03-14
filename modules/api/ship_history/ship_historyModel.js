const mongoose = require('mongoose');
const ship_historySchema = require('./ship_historySchema');
let ship_historyModel = mongoose.model('ship_history', ship_historySchema);

const selectHistory = async (idOrder) => {
    try
    {
        return await ship_historyModel.find({order : idOrder}).exec();
    }
    catch(err)
    {
        return null;
    }
}

const insertHistory = async(history) => {
    try
    {
        return await ship_historyModel.create(history);
    }
    catch(err)
    {
        return null;
    }
}
module.exports = {
    selectHistory, insertHistory
}