import users from '../models/User.js'

class UserController {

    static listUser = (req, res) => {

        users.find((err, users) => {

            users = users.map(user => {
                const userAux = { ...user['_doc'] };
                delete userAux.password;
                return userAux;
            })

            res.status(200).json(users);
        })
    }

    static listUserById = (req, res) => {
        const id = req.params.id;
        users.findById(id, (err, users) => {
            if (err) {
                res.status(404).send({ message: `${err.message} - User id not found` });
            } else {
                const userAux = { ...users['_doc'] };
                delete userAux.password;
                res.status(200).send(userAux);
            }
        })
    }

    // static listUserByName = (req, res) => {
    //     const name = req.params.name;

    //     users.findById(name, (err, users) => {
    //         if (err) {
    //             res.status(404).send({ message: `${err.message} - User id not found` });
    //         } else {
    //             const userAux = { ...users['_doc'] };
    //             delete userAux.password;
    //             res.status(200).send(userAux);
    //         }
    //     })
    // }

    static registerUser = (req, res) => {
        let user = new users(req.body);
        user.save((err, user) => {
            err ? res.status(500).send({ message: `Failed to register User - ${err.message}` }) : res.status(201).send(user.toJSON())
        })
    }

    static updateUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "User updated successfully" });
            } else {
                res.status(404).send({ message: `${err.message} - User Not Found` })
            }
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndRemove(id, (err) => {
            if (!err) {
                res.status(204).send({ message: "User has been successfully deleted" });
            } else {
                res.status(404).send({ message: `${err.message} - User Not Foundz` })
            }
        })
    }
}

export default UserController;