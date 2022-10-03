const users = require('../models/users.js')

const find = (req, res, next) => {
	const projection = { id: '$_id', _id: 0, name: 1, username: 1, email: 1 }
	users.find({}, projection, function (err, data) {
		if (!err) {
			res.send(data)
		} else {
			res.send(err)
		}
	})
}

const create = async (req, res, next) => {
	const newData = new users({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
	})
	newData.save(function (err, data) {
		if (!err) {
			const projection = { id: '$_id', _id: 0, name: 1, username: 1, email: 1 }
			users.findOne({ _id: data._id }, projection, function (err, data) {
				if (!err) {
					res.send(data)
				} else {
					res.send(err)
				}
			})
		} else {
			res.send(err)
		}
	})
}

const patch = (req, res, next) => {
	users.updateOne(
		{ _id: req.params.id },
		{ $set: req.body },
		function (err, data) {
			if (!err) {
				users.findOne({ id: req.params.id }, function (err, data) {
					if (data) {
						res.send(data)
					} else {
						res.send('No Matching found')
					}
				})
			} else {
				res.send(err)
			}
		}
	)
}

const remove = (req, res, next) => {
	users.deleteMany(function (err) {
		if (!err) res.send('All deleted')
		else res.send(err)
	})
}

const removeById = (req, res, next) => {
	users.deleteOne({ _id: req.params.id }, function (err, data) {
		if (data) {
			if (!err) {
				res.send(data)
			} else {
				res.send(err)
			}
		} else {
			res.send('No matching  was found.')
		}
	})
}

const findById = (req, res, next) => {
	users.findOne({ _id: req.params.id }, function (err, data) {
		if (data) {
			res.send(data)
		} else {
			res.send('No matching found.')
		}
	})
}

module.exports = {
	find,
	create,
	patch,
	remove,
	findById,
	removeById,
}
