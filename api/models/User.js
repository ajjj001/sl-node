class User extends MongooseModel {
    static schema = {
        userId: { title: string },
        id: { title: string },
        title: { title: string },
        completed: { title: string },
        company: { title: string }
    }

    // static getCompany(user) {
    //     return user.company
    // }

    static get() {
        let users;
        // use service to get data from google api
        const service = new GoogleAPI();
        service.get().then(data =>
            users = data
        ).catch(err => {
            return err
        }
        )
        // set company for each user to Google
        users = users.map((user) => (
            new User(user.userId, user.id, user.title, user.completed, "Google")
        ))
        return users

    }
}

module.exports = User