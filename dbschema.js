let db  = {

    users:  [
        {
            userId:     'o7mjjvfTcZUfFXsuq30iFGHyAAl2',
            email:      'user@email.com',
            handle:     'user',
            createdAt:  '2019-10-15T01:45:25.018Z',
            imageUrl:   'image/akeoiagnsds/aowiefslkfje',
            bio:        'Hello, my name is user, nice to meet you',
            website:    'https://user.com',
            location:   'Los Angeles, CA'
        }
    ],

    screams:    [
        {
            userHandle:     'user',
            body:           'this is the scream body',
            createdAt:      '2019-10-15T01:45:25.018Z',
            likeCount:      5,
            commentCount:   2
        }
    ],

    comments:   [
        {
            userHandle: 'user',
            screamId:   'kdjsfgdksuufhgkdsufky',
            body:       'nice one bruh!',
            createdAt:  '2019-10-15T01:45:25.018Z'
        }
    ],

    notifications:  [
        {
            recipient:  'user',
            sender:     'john',
            read:       'true | false',
            screamId:   'kdjsfgdksuufhgkdsufky',
            type:       'like | comment',
            createdAt:  '2019-10-15T01:45:25.018Z'
        }
    ]

}

const userDetails   = {

    // Redux Data
    credentials:    {
        userId:     'N43KJ5H43KJHREW4J5H3JWMERHB',
        email:      'user@email.com',
        handle:     'user',
        createdAt:  '2019-10-15T01:45:25.018Z',
        imageUrl:   'image/akeoiagnsds/aowiefslkfje',
        bio:        'Hello, my name is user, nice to meet you',
        website:    'https://user.com',
        location:   'Los Angeles, CA'
    },
    
    likes:  [
        {
            userHandle: 'user',
            screamId:   'hh705oWfWucVzGbHH2pa'
        },
        {
            userHandle: 'user',
            screamId:   '3IOnFoQexRcofs5OhBXO'
        }
    ]

}