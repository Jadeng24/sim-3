

module.exports = {
    update: (req, res) => {
        const user = req.body
        const db = req.app.get('db')
        db.add_user([user.firstName, user.lastName, user.relationship, user.hobby, user.hairColor, user.eyeColor, user.year, user.birthMonth, user.birthday])
        console.log(user.firstName);
        // first_name, last_name, gender, hobby, hair, eye, birthday_year, birthday_month, birthday_day
    }

}