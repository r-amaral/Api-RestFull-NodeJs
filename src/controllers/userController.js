import users from '../models/User.js'

class UserController {

    static listUser = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        })
    }

    static listUserById = (req, res) => {
        const id = req.params.id;
        users.findById(id, (err, users) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - User id not found` });
            } else {
                res.status(200).send(users);
            }
        })
    }

    static registerUser = (req, res) => {
        let user = new users(req.body);
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to register User.` })
            } else {
                res.status(201).send(user.toJSON())
            }
        })
    }

    static updateUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "User updated successfully" });
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndRemove(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "User has been successfully deleted" });
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default UserController;