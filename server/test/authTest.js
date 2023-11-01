const chai = require("chai")
const chaiHttp = require("chai-http")
// const { setMaxListeners } = require("superagent")
const app = require("../index")
const assert = chai.assert

chai.use(chaiHttp)



suite("I SHOULD be able to register a user", () => {

    // let testUser1 = {
    //     firstName: "Test",
    //     lastName: "User1",
    //     email: "testuser1@mail.com",
    //     password1: "password1",
    //     password2: "password1",
    //     department: "customer service",
    //     hired: 1992,
    //     telephone: 602-272-4132
    // }

    // let testUser2 = {
    //     firstName: "Test",
    //     lastName: "User2",
    //     email: "testuser@mail.com",
    //     password1: "password1",
    //     password2: "password1",
    //     department: "customer service",
    //     hired: 1992,
    //     telephone: 6022725555

    // }

    let testUser3 = {
        userName: "TestUser",
        firstName: "Test",
        lastName: "User8",
        email: "testuser8@mail.com",
        password1: "password",
        password2: "password",
        department: "Marketing",
        hired: 1999,
        telephone: 4802694500
    }

    // let adminUser = {
    //     userName: "admin",
    //     firstName: "Jason",
    //     lastName: "Morgan",
    //     email: "admin@mail.com",
    //     password1: "password",
    //     password2: "password",
    //     department: "Administration",
    //     role: "admin",
    //     hired: 1990,
    //     telephone: "602-269-6001"

    // }

    // test("If passwords do not match, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //         .post("/auth/register")
    //         .send(testUser1)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.isString(res.body.message)
    //             assert.equal(res.body.message, "The passwords do not match.")
    //             done()
    //         })
    // })

    // test("If email is already in use, should get a message", (done) => {
    //     chai.request(app)
    //         .post("/auth/register")
    //         .send(testUser2)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.isString(res.body.message)
    //             assert.equal(res.body.message, `testuser@mail.com is already registered in the database`)
    //             done()
    //         })
    // })

    // test("I SHOULD be able to register a user, then be LOGGED IN", (done) => {
    //     chai.request(app)
    //         .post("/auth/register")
    //         .send(testUser3)
    //         .end((err, res)=>{
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body)
    //             // assert.equal(res.body.user.firstName, "Test")
    //             // assert.equal(res.body.user.lastName, "User")
    //             // assert.equal(res.body.user.email, "testuser@mail.com")
    //             // assert.equal(res.body.user.department, "customer service")
    //             assert.isString(res.body.message)
    //             // assert.equal(res.body.message, "User logged in")
    //             done()
    //         })
    // })

})

suite("User SHOULD be able to LOG IN", () => {

    // let testUser1 = {
    //     email: "testuser@mail.com",
    //     password: "password1",
    // }
    // let testUser2 = {
    //     email: "testuserthree@mail.com",
    //     password: "password",
    // }
    // let testUser3 = {
    //     email: "testuser@mail.com",
    //     password: "password",
    // }


    // test("If password is incorrect I should get a message", (done) => {
    //     chai.request(app)
    //         .post("/auth/login")
    //         .send(testUser1)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.isString(res.body.message)
    //             assert.equal(res.body.message, "password or email do not match database")
    //             done()
    //         })
    // })

    // test("If email is incorrect I should get a message", (done) => {
    //     chai.request(app)
    //         .post("/auth/login")
    //         .send(testUser2)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.exists(res.body.message)
    //             assert.isString(res.body.message)
    //             assert.equal(res.body.message, "password or email do not match database")
    //             done()
    //         })
    // })

    // test("If user can login I can verify data", (done) => {
    //     chai.request(app)
    //         .post("/auth/login")
    //         .send(testUser3)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.user.firstName, "Test")
    //             assert.equal(res.body.user.lastName, "User")
    //             assert.equal(res.body.user.email, "testuser@mail.com")
    //             assert.equal(res.body.user.department, "customer service")
    //             assert.equal(res.body.user.role, "user")
    //             assert.isArray(res.body.user.posts)
    //             done()
    //         })
    // })

})



suite("Update a user", () => {

    // let _id = "6436ea82070ce07cdee7ee75"

    // let testUser1 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     firstName: "Test",
    //     lastName: "User",
    // }

    // let testUser2 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     password1: "password",
    //     password2: "password",
    // }

    // let testUser3 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     firstName: "Test",
    //     lastName: "User",
    //     email: "testuser@mail.com",
    //     password1: "password1",
    //     password2: "password",
    //     department: "help desk",
    //     hired: 1992,
    //     telephone: "6022724132"
    // }

    // let testUser4 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     firstName: "Test",
    //     lastName: "User",
    //     email: "testuser#mail.com",
    //     password1: "password1",
    //     password2: "password",
    //     department: "help desk",
    //     hired: 1992,
    //     telephone: "6022724132"
    // }

    // let testUser5 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     firstName: "Test",
    //     lastName: "User",
    //     email: "testuser@mail.com",
    //     password1: "password1",
    //     password2: "password",
    //     department: "help desk",
    //     hired: 1992,
    //     telephone: "602@#$4132"
    // }

    // let testUser6 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     email: "testuser#mail.com",
    //     telephone: 601258924132
    // }

    // let testUser7= {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     email: "testuser2@mail.com",
    // }

    // let testUser8 = {
    //     _id: "6436ea82070ce07cdee7ee75",
    //     email: "testuser@mail.com",
    // }

    // let testUser9 = {
    //     _id: "64398f52abee0f1a3abd6775",
    //     userName: "Test3",
    //     // firstName: "Test",
    //     // lastName: "User",
    //     // email: "testuser@mail.com",
    //     // password1: "password",
    //     // password2: "password",
    //     department: "Human Resources",
    //     role: "user",
    //     hired: 2020,
    //     telephone: 9782695000
    // }



    // test("update user first and last name, keep same email and password", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser9)
    //     .end((err, res)=> {
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         // assert.equal(res.body.user.firstName, "Test")
    //         // assert.equal(res.body.user.lastName, "User")
    //         // assert.equal(res.body.user.email, "testuser@mail.com")
    //         assert.equal(res.body.message, "User logged in and updated!")
    //         done()
    //     })
    // })

    // test("only update user password", (done)=> {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser2)
    //     .end((err, res)=> {
    //         console.log("RES ", res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.user.firstName, "Test")
    //         assert.equal(res.body.user.email, "testuser@mail.com")
    //         assert.equal(res.body.message, "User logged in and updated!")
    //         done()
    //     })
    // })

    // test("if I try and update password with unmatching passwords, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser3)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "The passwords don't match")
    //         done()
    //     }) 
    // })

    // test("if I try and update with invalid email address, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser4)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "Please check your email address"  )
    //         done()
    //     }) 
    // })

    // test("if I try and update with an invalid telephone number, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser5)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "Please check your telephone number"  )
    //         done()
    //     }) 
    // })

    // test("if I try and update with an invalid telephone number and an invalid email address, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser6)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "Please check your telephone number and email address"  )
    //         done()
    //     }) 
    // })

    // test("if I try and update email with an email already registered in the database, I SHOULD get a message", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser7)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "testuser2@mail.com is already registered to the database.")
    //         done()
    //     }) 
    // })

    // test("only update user email", (done) => {
    //     chai.request(app)
    //     .post("/auth/update")
    //     .send(testUser8)
    //     .end((err, res) => {
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.user.firstName, "Test")
    //         assert.equal(res.body.user.lastName, "User")
    //         assert.equal(res.body.user.email, "testuser@mail.com")
    //         assert.equal(res.body.message, "User logged in and updated!")
    //         done()
    //     })
    // })

    // test("Update everything that can be at same time", (done) => {
    //     chai.request(app)
    //         .post("/auth/update")
    //         .send(testUser9)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.user.firstName, "Test")
    //             assert.equal(res.body.user.lastName, "User")
    //             assert.equal(res.body.user.email, "testuser@mail.com")
    //             assert.equal(res.body.user.department, "Design")
    //             assert.equal(res.body.user.role, "user")
    //             assert.equal(res.body.user.hired, 1995)
    //             assert.equal(res.body.user.telephone, 6022724132)
    //             assert.equal(res.body.message, "User logged in and updated!")
    //             done()
    //         })
    // })
})


suite("User SHOULD be able to delete accounut", () => {

    let testDeleteLogoutUser = {
        _id: "64398dd4388d681ad867f93e"
        
    }

    // test("User should be able to be deleted, then logged out", (done) => {
    //     chai.request(app)
    //     .post("/auth/delete")
    //     .send(testDeleteLogoutUser)
    //     .end((err, res)=>{
    //         console.log(res.body)
    //         assert.equal(res.status, 200)
    //         assert.equal(res.body.message, "User has been deleted and logged out")
    //         done()
    //     })
    // })

})

suite("User SHOULD be able to LOG OUT", () => {

    // test("user can LOG OUT", (done) => {
    //     chai.request(app)
    //         .post("/auth/logout")
    //         .end((err, res) => {
    //             // console.log(res.body)
    //             assert.equal(res.status, 200)
    //             done()
    //         })
    // })

})