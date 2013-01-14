/*
* User
*/

var n = 0, x = "A";

for (n; n < 100; n++) {

    var id = "", possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    var i = 0;
    for (0; i < 19; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var user = { 
        userId: "u-" + id,
        username: 'username' + x + n,
        email: x + n + "@wayin.com",
        //department: "dpt-2femqsup2r93d7e01jz",
        department: "dpt-5gq4vjgf7wm4z39ucf",
        membershipId: "mem-" + id + x
    }

    db.User.insert({
        "item" : {
            "id" : user.userId,
            "creationSourceUrl" : null,
            "modificationIpAddress" : "127.0.0.1",
            "legacyId" : null,
            "type" : "regular",
            "status" : null,
            "username" : user.username,
            "ssoSubjectId" : null,
            "avatarId" : null,
            "email" : user.email,
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
            "userProfiles" : {
                
            }
        }
    });


    db.Membership.insert({
        "item" : {
            "id" : user.membershipId,
            "creationIpAddress" : "127.0.0.1",
            "creationSourceUrl" : null,
            "modificationIpAddress" : "127.0.0.1",
            "legacyId" : null,
            "userId" : user.userId,
            "departmentId" : user.department,
                "role" : "member",
                "creationMethod" : "manual"
            }
    });

}
