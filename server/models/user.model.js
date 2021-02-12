module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                //idUser: String,
                nomUser: String,
                prenomUser: String,
                roleUser: String,
                passwordUser: String
            }
        )
    );
    return User;
};