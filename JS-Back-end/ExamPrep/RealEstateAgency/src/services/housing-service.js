const Housing = require('../models/Housing');

exports.create = (housingData) => Housing.create(housingData);

exports.details = (id) => Housing.findById(id).populate('tenants');

exports.getHauses = () => Housing.find({}).lean();

exports.delete = (id) => Housing.findByIdAndDelete(id);

exports.getTopHauses = () => Housing.find({}).sort({ createdAt: -1 }).limit(3).lean();

exports.addTenant = async (housingId, tenantId) => {
    let house = await this.details(housingId);

    house.tenants.push(tenantId);
    house.availablePieces = house.availablePieces - house.tenants.length;

    return house.save();
}
