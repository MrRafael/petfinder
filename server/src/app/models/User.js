const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        hooks: {
            beforeSave: async user => {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        }
    });

    User.prototype.checkPassword = function (password) {
        return bcrypt.compare(password, this.password_hash)
    }

    User.prototype.generateToken = function() {
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
      };

    return User;
}