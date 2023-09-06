const user = {
    name: 'ARYAN SATIJA',
    username: '4ry4n_s4t1j4',
    age: 19,
    gender: `male`,
    natinality: `INDIAN`,
    bio: `coding is like aging of wine ;)`,
    profile_url: `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Aryan`,
}
const chatData = [
    {
        _id: '1a42hhd24al200',
        friend:'devansh', 
        username:'devansharora312',
        profile_url : `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Devansh`,
        chat:[
                {
                    _id: '1',
                    from: '4ry4n_s4t1j4',
                    to: 'devansharora312',
                    chat: 'hello',
                    dated: '05-09-2023',
                    read: true
                },
                {
                    _id: '2',
                    from: '4ry4n_s4t1j4',
                    to: 'devansharora312',
                    chat: 'how many moons does jupiter has?',
                    dated: '05-09-2023',
                    read: true
                }, 
                {
                    _id: '3',
                    from: 'devansharora312',
                    to: '4ry4n_s4t1j4',
                    chat: 'hi',
                    dated: '06-09-2023',
                    read: false
                },
                {
                    _id: '4',
                    from: 'devansharora312',
                    to: '4ry4n_s4t1j4',
                    chat: 'ig, around 80-95',
                    dated: '06-09-2023',
                    read: false
                }
            ],
        unreadMessages: 2
    },
    {
        _id: '8affh6d24al201',
        friend: 'vasu',
        username : 'vasu31__',
        profile_url : `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Vasu`,
        chat: [
            {
                _id: '1',
                from: 'vasu31__',
                to: '4ry4n_s4t1j4',
                chat: 'hello',
                dated: '05-09-2023',
                read: false
            },
        ],
        unreadMessages: 1
    }, 
    {
        _id: '1942hhd24ap1207',
        friend : 'vivek',
        username: 'vivekkv_ig',
        profile_url : `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Vivek`,
        chat : [
            
        ],
        unreadMessages: 0
    },
    {
        _id: '2242hsa24l1117',
        friend : 'aditya',
        username: 'aditya_garg8384',
        profile_url : `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Aditya`,
        chat : [

        ],
        unreadMessages: 0
    },
    {
        _id: '2a42had24as112',
        friend : 'chaitanya',
        username: 'chaitanya_rawat_senpai',
        profile_url : `https://api.dicebear.com/7.x/initials/svg?backgroundColor=b6e3f4&seed=Chaitanya`,
        chat : [

        ]
    }
]
export default {user, chatData};