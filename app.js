var http = require('http'),        // HTTP library so we can output a response to the browser
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,      // basic schema to store data into the database.
    Mixed = Schema.Types.Mixed;    // object datatype to store our simple object in the database

var User = new Schema({            // "template" to store the data into our collection
    item: Mixed
});

var Member = new Schema({
    item: Mixed
});

// connect to the database...
mongoose.connect('mongodb://localhost/test7');

// tell mongoose that this is our template so we can request it later
mongoose.model('User', User);
mongoose.model('Member', User);


// create our server listener 
http.createServer(function (req, res) {

    // tell the browser that this we will output JSON
    res.writeHead(200, {'Content-Type': 'application/json'});
 
    // get the templates so we can build an object to store, or retrive data later
    var UserObj = mongoose.model('User'),
        MemberObj = mongoose.model('Member'),
        possible = "abcdefghijklmnopqrstuvwxyz0123456789",
        x = 'C',
        n = 0;

    // create an object store

    for (n; n < 5; n++) {

        var User = new UserObj(),
            Member = new MemberObj(),
            i = 0,
            id = "",
            data = {};

        for (0; i < 19; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        data = {
            userId: "u-" + id,
            username: 'username' + x + n,
            email: x + n + "@wayin.com",
            department: "dpt-5gq4vjgf7wm4z39ucf",
            membershipId: "mem-" + id + x
        };

        User.item = {
            "id" : data.userId,
            "creationSourceUrl" : null,
            "modificationIpAddress" : "127.0.0.1",
            "legacyId" : null,
            "type" : "regular",
            "status" : null,
            "username" : data.username,
            "ssoSubjectId" : null,
            "avatarId" : null,
            "email" : data.email,
            "name" : null,
            "gender" : null,
            "bio" : null,
            "websiteName" : null,
            "websiteUrl" : null,
            "dateOfBirth" : null,
            "passwordHash" : null,
            "onboardStatus" : "none",
            "invitationAllowance" : 0,
            "lastRequestTime" : null,
            "lastNotificationSentTime" : null,
            "tutored" : false,
            "roles" : null,
            "userProfiles" : { }
        };

        Member.item = {
            "item" : {
                "id" : data.membershipId,
                "creationIpAddress" : "127.0.0.1",
                "creationSourceUrl" : null,
                "modificationIpAddress" : "127.0.0.1",
                "legacyId" : null,
                "userId" : data.userId,
                "departmentId" : data.department,
                "role" : "member",
                "creationMethod" : "manual"
            }
        };

        // Save into the database
        //User.save(function (err) {
            //if (err) {
                //res.write('{"Save Error":"' + err.err + '"}');
            //}
        //});

        User.save();

        Member.save();
    }






    UserObj.find({}, function (err, objs) {
        if (err) {
            res.write('{"Find Error":"' + err.err + '"}');
        } else {

            // Get our data from the collection store
            res.write(JSON.stringify(objs));
            // Finally, close the HTTP response, we're done.
            res.end();

        }
    });

    MemberObj.find({}, function (err, objs) {
        if (err) {
            res.write('{"Find Error":"' + err.err + '"}');
        } else {
            res.write(JSON.stringify(objs));
            res.end();
        }
    });






}).listen(3000);

console.log('Server running at http://localhost:3000/');
