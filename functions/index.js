// Requirements and Routes

const functions                         = require('firebase-functions')
const app                               = require('express')()
const FBAuth                            = require('./util/fbAuth')
const {
    getAllScreams, 
    postOneScream,
    getScream,
    commentOnScream,
    likeScream,
    unlikeScream
}  = require('./handlers/screams')
const {
    signup, 
    login, 
    uploadImage, 
    addUserDetails, 
    getAuthenticatedUser
} = require('./handlers/users')

// Scream Routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream)
app.get('/scream/:screamId', getScream)
// TODO: delete scream
app.get('/scream/:screamId/like', FBAuth, likeScream)
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream)
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)



// User Routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser)




// ------------------------------------------------------------------------------------------------------

// Exports

exports.api = functions.https.onRequest(app)