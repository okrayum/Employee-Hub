const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../index")
const assert = chai.assert

chai.use(chaiHttp)


suite("Post CRUD", () => {

    let testAddPost = {
        _id: "64398f52abee0f1a3abd6775",
        title: "User Test2 Post",
        body: "How many tests will it take to pass?"
    }

    let testUpdatePost = {
        _id: "64396deaa63ffad67085de4a",
        title: "This is still a Test",
        body: "How many tests will it take to pass this one?"
    }

    let testDeletePost = {
        _id: "643d931b5ee5bf2a391a4b83"
    }

    // test("SHOULD be able to add a post", (done) => {
    //     chai.request(app)
    //         .post("/app/addpost")
    //         .send(testAddPost)
    //         .end((err, res) => {
    //             console.log("test",res.body)
    //             assert.equal(res.status, 200)
    //             // assert.equal(res.body.userId.firstName, "Test2")
    //             // assert.isArray(res.body.posts)
    //             // assert.deepNestedInclude(res.body.posts[0], { title: "This is a Test", body: "How many tests will it take to pass?" })
    //             done()
    //         })
    // })

    // test('Can update a post', (done) => {
    //     chai.request(app)
    //         .post("/app/updatepost")
    //         .send(testUpdatePost)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.firstName, 'Test')
    //             assert.deepNestedInclude(res.body.posts[0], { title: "This is still a Test", body: "How many tests will it take to pass this one?" })
    //             done()
    //         })
    // })

    // test("Can DELETE a post", (done) => {
    //     chai.request(app)
    //         .post("/app/deletepost")
    //         .send(testDeletePost)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             // assert.equal(res.body.firstName, 'Test')
    //             // assert.equal(res.body.lastName, 'User')
    //             // assert.isArray(res.body.posts)
    //             // assert.notDeepNestedInclude(res.body.posts, { _id: "64396deaa63ffad67085de4a" })
    //             done()
    //         })
    // })

}) 


suite("Message CRUD", () => {

    let testSendMessage = {
        _id: "64397933fb728e5e5dced0db",
        message: "Hello, this is a test message.",
    }

    let testUpdateMessage = {
        _id: "64396deba63ffad67085de4e",
        message: "Hello, this is another test message.",
    }

    let testDeleteMessage = {
        _id: "64396deba63ffad67085de4e"
    }

    // test("SHOULD be able to send a message", (done) => {
    //     chai.request(app)
    //         .post("/app/sendmessage")
    //         .send(testSendMessage)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.firstName, "Test")
    //             assert.isArray(res.body.posts)
    //             assert.isArray(res.body.messages)
    //             assert.deepNestedInclude(res.body.messages[0], { message: "Hello, this is a test message." })
    //             done()
    //         })
    // })

    // test('Can update a message', (done) => {
    //     chai.request(app)
    //         .post("/app/updatemessage")
    //         .send(testUpdateMessage)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.firstName, 'Test')
    //             assert.deepNestedInclude(res.body.messages[0], { message: "Hello, this is another test message." })
    //             done()
    //         })
    // })

    // test("Can DELETE a message", (done) => {
    //     chai.request(app)
    //         .post("/app/deletemessage")
    //         .send(testDeleteMessage)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             assert.equal(res.status, 200)
    //             assert.equal(res.body.firstName, 'Test')
    //             // assert.equal(res.body.lastName, 'User')
    //             assert.isArray(res.body.posts)
    //             assert.notDeepNestedInclude(res.body.messages, { _id: "64396deba63ffad67085de4e" })
    //             done()
    //         })
    // })

}) 