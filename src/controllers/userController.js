import users from '../models/User.js'

class UserController {

    static listUser = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(resultUsers);
        })
    }

    static listUserByName = (req, res) => {
        const name = req.query.name;

        users.find({ name: { $regex: name } }, {}, (err, users) => {
            users.length == 0 ? res.status(404).send({ message: `User name not found` })
                : res.status(200).send(users)
        })
    }

    static listUserById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            err ? res.status(404).send({ message: `${err.message} - User id not found` })
                : res.status(200).send(users);
        })
    }

    static registerUser = (req, res) => {
        let user = new users(req.body);

        user.save((err, user) => {
            err ? res.status(500).send({ message: `Failed to register User - ${err.message}` })
                : res.status(201).send(user.toJSON());
        })
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, { $set: req.body }, { runValidators: true }, (err) => {
            !err ? res.status(200).send({ message: "User updated successfully" })
                : res.status(404).send({ message: `${err.message} - User Not Found` });
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndRemove(id, (err) => {
            !err ? res.status(204).send({ message: "User has been successfully deleted" })
                : res.status(404).send({ message: `${err.message} - User Not Found` });
        })
    }
}

export default UserController;