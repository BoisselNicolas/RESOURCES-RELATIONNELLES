module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                //idUser: String,
                mailUser: String,
                passwordUser: String
            }
        )
    );
    return User;
};