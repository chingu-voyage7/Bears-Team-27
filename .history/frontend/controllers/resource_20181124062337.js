const mongoose = require('mongoose');
const Resource = mongoose.model('Resource');

exports.getAllResources = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({
      message: 'Permission Denied!',
    });
  }
  const resources = await Resource.find({
    owner: mongoose.Types.ObjectId(req.user._id),
  });
  res.send(resources);
};
