// This file is shared static data.

export const socialData =
[
    {
        "id" : 0,
        "itemTitle" : "My Post",
        "socialName" : "Facebook",
        "icon" : "facebook",
        "isHidden" : false,
        "posts": [{
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "SID",
            "date" : "September 14, 2016",
            "connectedMedia": [
                {
                    "icon": 'google',
                    "socialName": "Google"
                },
                {
                    "icon": 'pinterest',
                    "socialName": "Pinterest"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample text about the media",
                "otherData": "Other data"
            }
        },
        {
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "SM",
            "date" : "September 25, 2017",
            "connectedMedia": [
                {
                    "icon": 'facebook',
                    "socialName": "Facebook"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample facebook text about the media",
                "otherData": "Other data facebook"
            }
        }
        ]
    },
    {
        "id" : 1,
        "itemTitle" : "Scheduled",
        "name": "Google",
        "icon": "google",
        "isHidden" : false,
        "posts": [{
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "SM",
            "date" : "September 12, 2017",
            "connectedMedia": [
                {
                    "icon": 'google',
                    "socialName": "Google"
                },
                {
                    "icon": 'pinterest',
                    "socialName": "Pinterest"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample text about the media",
                "otherData": "Other data"
            }
        },
        {
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "S",
            "date" : "September 14, 2017",
            "connectedMedia": [
                {
                    "icon": 'facebook',
                    "socialName": "Facebook"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
                {
                    "icon": 'pinterest',
                    "socialName": "Pinterest"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample facebook text about the media",
                "otherData": "Other data facebook"
            }
        }
        ]
    },
    {
        "id" : 2,
        "itemTitle" : "Home",
        "name": "Twitter",
        "icon": "twitter",
        "isHidden" : false,
        "posts": [{
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "M",
            "date" : "July 02, 2017",
            "connectedMedia": [
                {
                    "icon": 'google',
                    "socialName": "Google"
                },
                {
                    "icon": 'pinterest',
                    "socialName": "Pinterest"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample text about the media",
                "otherData": "Other data"
            }
        },
        {
            "name" : "Siddappa Mirji",
            "emailId" : "smirji97@gmail.com",
            "profileImage" : "SM",
            "date" : "June 19, 2017",
            "connectedMedia": [
                {
                    "icon": 'facebook',
                    "socialName": "Facebook"
                },
                {
                    "icon": 'twitter',
                    "socialName": "Twitter"
                },
            ],
            "postData": {
                "media": true,
                "mediaType": "image",
                "mediaUrl": require("../images/interstellardd.jpg"),
                "description": "Sample facebook text about the media",
                "otherData": "Other data facebook"
            }
        }
        ]
    }
];


export const dashSlideData = [
    {
        "title" : "60%",
        "name"  : "Nike",
        "content" : "Nike report information",
        "image" : require("../images/socreport.jpg")
    },
    {
        "title" : "458",
        "name"  : "Facebook",
        "content" : "Focebook Cantacts",
        "image" : require("../images/socreport.jpg")
    },
    {
        "title" : "200",
        "name"  : "Trumph",
        "content" : "New Posts",
        "image" : require("../images/socreport.jpg")
    },
    {
        "title" : "1000090",
        "name"  : "GOT",
        "content" : "Top liks this week",
        "image" : require("../images/socreport.jpg")
    }
];


export const selctMenuOptions = [
    'Show all posts',
    'Scheduled',
    'Private',
];

export const drawerMenuOptions = {
    mainMenuOptions : [
        {
           "iconName": 'chat',
           "title": "Follow Chats"
        },
        {
           "iconName": 'poll',
           "title": "Competetors"
        },
        {
           "iconName": 'star',
           "title": "Interest"
        },
        {
           "iconName": 'public',
           "title": "Connected Medias"
        },
        {
            "iconName": 'volume_up',
            "title": "Campaign"
        },
        {
            "iconName": 'free_breakfast',
            "title": "Foodie Group"
        },
        
    ],
    otherOptions : [
        {
           "iconName": 'group_add',
           "title": "Add another group"
        }
    ],
    subOptions : [
        {
           "iconName": 'settings_power',
           "title": "Logout"
        }
    ],
    themeOptions : [
        {
           "iconName": 'invertc_olors',
           "title": "Theme"
        }
    ],
    socialMenuOptions : [
        {
          "iconName": 'facebook',
          "title": "Facebook"
       },
       {
        "iconName": 'twitter',
        "title": "Twitter"
       },
        {
          "iconName": 'pinterest',
          "title": "Pinterest"
        },
      {
        "iconName": 'google',
        "title": "Google"
      }
    ]
};
