export const posts = [
    {
        title: "Introduction to Machine Learning",
        cover_image: "https://datascientest.com/en/files/2021/01/Machine-learning-def-.png",
        tags: ["machine learning", "AI", "data science"],
        body: {
            introduction: "Machine learning is a method of data analysis that automates analytical model building.",
            sections: [
                {
                    heading: "What is Machine Learning?",
                    content: "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy."
                },
                {
                    heading: "Types of Machine Learning",
                    content: "There are three types of machine learning: supervised learning, unsupervised learning, and reinforcement learning.",
                    code: {
                        language: "python",
                        snippet: "from sklearn.ensemble import RandomForestClassifier"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/ml-types.png",
                    caption: "Types of Machine Learning"
                }
            ],
            references: [
                {
                    title: "Machine Learning - Wikipedia",
                    url: "https://en.wikipedia.org/wiki/Machine_learning"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "AI Basics",
            canonical_url: "https://example.com/posts/intro-to-ml",
            timestamp: "2023-04-01T10:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 120,
            bookmarks: 45,
            comments: 30
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Jane Smith",
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4UE7tTfa0_Ed4q3XE5Qxn3MfrJAZrkbbWQ&s",
            bio: "Data Scientist with a passion for machine learning and AI."
        }
    },
    {
        title: "Advanced Python Techniques",
        // cover_image: "https://example.com/images/python.jpg",
        tags: ["python", "programming", "advanced"],
        body: {
            introduction: "Python is a versatile language that can be used for a variety of applications.",
            sections: [
                {
                    heading: "Decorators",
                    content: "Decorators are a significant part of Python. They allow programmers to modify the behavior of a function or class."
                },
                {
                    heading: "Generators",
                    content: "Generators are a simple way of creating iterators. They are written like regular functions but use the yield statement whenever they want to return data.",
                    code: {
                        language: "python",
                        snippet: "def my_gen():\n    n = 1\n    print('This is printed first')\n    yield n"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/python-logo.png",
                    caption: "Python Logo"
                }
            ],
            references: [
                {
                    title: "Python Official Documentation",
                    url: "https://docs.python.org/3/"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Python Mastery",
            canonical_url: "https://example.com/posts/advanced-python",
            timestamp: "2023-04-02T09:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 95,
            bookmarks: 33,
            comments: 22
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "John Doe",
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqQUhrh5alEw0U1eEO76sWLe-nn-aZRu59Q&s",
            bio: "Senior Python Developer and Educator."
        }
    },
    {
        title: "Understanding Blockchain Technology",
        // cover_image: "https://example.com/images/blockchain.jpg",
        tags: ["blockchain", "cryptocurrency", "technology"],
        body: {
            introduction: "Blockchain is a distributed database that allows for secure, transparent, and tamper-proof transactions.",
            sections: [
                {
                    heading: "What is Blockchain?",
                    content: "A blockchain is a growing list of records, called blocks, that are linked using cryptography."
                },
                {
                    heading: "How Does Blockchain Work?",
                    content: "Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.",
                    code: {
                        language: "javascript",
                        snippet: "const Blockchain = require('blockchain');"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/blockchain-diagram.png",
                    caption: "Blockchain Diagram"
                }
            ],
            references: [
                {
                    title: "Blockchain Basics",
                    url: "https://en.wikipedia.org/wiki/Blockchain"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Tech Innovations",
            canonical_url: "https://example.com/posts/blockchain-tech",
            timestamp: "2023-04-03T08:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 150,
            bookmarks: 60,
            comments: 40
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Alice Wonder",
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjopWCmlem2HazPgNBQ8eoegNqcVXkL1Ndg&s",
            bio: "Blockchain Developer and Tech Enthusiast."
        }
    },
    {
        title: "Getting Started with React",
        cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wLUSiQDE36oJCMd-4UZAm8u7ryrpZRQgaA&s",
        tags: ["react", "javascript", "frontend"],
        body: {
            introduction: "React is a JavaScript library for building user interfaces.",
            sections: [
                {
                    heading: "What is React?",
                    content: "React makes it painless to create interactive UIs. Design simple views for each state in your application."
                },
                {
                    heading: "Components and Props",
                    content: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.",
                    code: {
                        language: "javascript",
                        snippet: "function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/react-logo.png",
                    caption: "React Logo"
                }
            ],
            references: [
                {
                    title: "React Official Documentation",
                    url: "https://reactjs.org/docs/getting-started.html"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Frontend Development",
            canonical_url: "https://example.com/posts/getting-started-react",
            timestamp: "2023-04-04T07:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 200,
            bookmarks: 80,
            comments: 50
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Bob Builder",
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosgbQUz8RCGrz_ylUoIsbr6iRd04vJK_dsw&s",
            bio: "Frontend Developer and React Specialist."
        }
    },
    {
        title: "Deep Dive into Docker",
        cover_image: "https://example.com/images/docker.jpg",
        tags: ["docker", "devops", "containers"],
        body: {
            introduction: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
            sections: [
                {
                    heading: "What is Docker?",
                    content: "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers."
                },
                {
                    heading: "Docker Containers vs Virtual Machines",
                    content: "Containers are more lightweight and use the host's OS, sharing relevant libraries and resources, unlike VMs which include the entire OS.",
                    code: {
                        language: "bash",
                        snippet: "docker run -d -p 80:80 docker/getting-started"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/docker-architecture.png",
                    caption: "Docker Architecture"
                }
            ],
            references: [
                {
                    title: "Docker Official Site",
                    url: "https://www.docker.com/"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "DevOps Essentials",
            canonical_url: "https://example.com/posts/deep-dive-docker",
            timestamp: "2023-04-05T06:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 180,
            bookmarks: 70,
            comments: 45
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Charlie Docker",
            profile_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsMgv8DxmVoPOaex3TMmox6aGHrJoemjL1Q&s",
            bio: "DevOps Engineer with a focus on containerization."
        }
    },
    {
        title: "Exploring GraphQL",
        cover_image: "https://example.com/images/graphql.jpg",
        tags: ["graphql", "api", "web development"],
        body: {
            introduction: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
            sections: [
                {
                    heading: "What is GraphQL?",
                    content: "GraphQL provides a complete and understandable description of the data in your API."
                },
                {
                    heading: "GraphQL vs REST",
                    content: "GraphQL allows clients to request exactly the data they need, potentially reducing the amount of data that needs to be transferred over the network.",
                    code: {
                        language: "graphql",
                        snippet: "query {\n  user(id: 1) {\n    name\n    email\n  }\n}"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/graphql-logo.png",
                    caption: "GraphQL Logo"
                }
            ],
            references: [
                {
                    title: "GraphQL Official Documentation",
                    url: "https://graphql.org/learn/"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "API Development",
            canonical_url: "https://example.com/posts/exploring-graphql",
            timestamp: "2023-04-06T05:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 130,
            bookmarks: 50,
            comments: 35
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Diana API",
            profile_url: "https://example.com/profiles/diana-api",
            bio: "API Developer and GraphQL Advocate."
        }
    },
    {
        title: "Mastering CSS Grid",
        cover_image: "https://example.com/images/css-grid.jpg",
        tags: ["css", "web design", "frontend"],
        body: {
            introduction: "CSS Grid Layout is a powerful tool for creating complex web layouts.",
            sections: [
                {
                    heading: "What is CSS Grid?",
                    content: "CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives."
                },
                {
                    heading: "Grid vs Flexbox",
                    content: "While Flexbox is designed for one-dimensional layouts, Grid is designed for two-dimensional layouts.",
                    code: {
                        language: "css",
                        snippet: ".container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/css-grid-example.png",
                    caption: "CSS Grid Example"
                }
            ],
            references: [
                {
                    title: "CSS Grid Layout - MDN",
                    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Web Design Techniques",
            canonical_url: "https://example.com/posts/mastering-css-grid",
            timestamp: "2023-04-07T04:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 110,
            bookmarks: 40,
            comments: 25
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Eve Stylist",
            profile_url: "https://example.com/profiles/eve-stylist",
            bio: "Web Designer with a focus on modern CSS techniques."
        }
    },
    {
        title: "Introduction to Node.js",
        cover_image: "https://example.com/images/nodejs.jpg",
        tags: ["nodejs", "javascript", "backend"],
        body: {
            introduction: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
            sections: [
                {
                    heading: "What is Node.js?",
                    content: "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."
                },
                {
                    heading: "Creating a Simple Server",
                    content: "Node.js makes it easy to create a simple web server that can handle HTTP requests.",
                    code: {
                        language: "javascript",
                        snippet: "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.end('Hello World');\n});\nserver.listen(3000);"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/nodejs-logo.png",
                    caption: "Node.js Logo"
                }
            ],
            references: [
                {
                    title: "Node.js Official Documentation",
                    url: "https://nodejs.org/en/docs/"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Backend Development",
            canonical_url: "https://example.com/posts/intro-nodejs",
            timestamp: "2023-04-08T03:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 140,
            bookmarks: 55,
            comments: 38
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Frank Node",
            profile_url: "https://example.com/profiles/frank-node",
            bio: "Backend Developer and Node.js Enthusiast."
        }
    },
    {
        title: "Understanding Big O Notation",
        cover_image: "https://example.com/images/big-o.jpg",
        tags: ["algorithms", "computer science", "performance"],
        body: {
            introduction: "Big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.",
            sections: [
                {
                    heading: "What is Big O Notation?",
                    content: "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity."
                },
                {
                    heading: "Common Time Complexities",
                    content: "O(1) - Constant time, O(log n) - Logarithmic time, O(n) - Linear time, O(n log n) - Linearithmic time, O(n^2) - Quadratic time.",
                    code: {
                        language: "python",
                        snippet: "def constant_time_example(arr):\n    return arr[0]"
                    }
                }
            ],
            images: [
                {
                    url: "https://example.com/images/big-o-graph.png",
                    caption: "Big O Complexity Graph"
                }
            ],
            references: [
                {
                    title: "Big O Notation - Wikipedia",
                    url: "https://en.wikipedia.org/wiki/Big_O_notation"
                }
            ]
        },
        front_matter: {
            published: true,
            series: "Computer Science Fundamentals",
            canonical_url: "https://example.com/posts/understanding-big-o",
            timestamp: "2023-04-09T02:00:00Z" // Added timestamp
        },
        reactions: {
            likes: 90,
            bookmarks: 35,
            comments: 20
        },
        comments: [
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLCqR9DrVOUk3XNOOJamk822VrR6OvjQi4Q&s",
                user: "crypto_insider",
                comment: "This breakdown was super helpful, thanks!",
                timestamp: "2023-04-08T10:15:00Z",
                likes: 12,
                replies: [
                    {
                        user: "btc_hodler",
                        comment: "Absolutely! Made things clear.",
                        timestamp: "2023-04-08T11:00:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7bZ5byhX0Hxi9tffJ95GvCOZl0vk4TDd7w&s",
                user: "defi_guru",
                comment: "Interesting take on the topic!",
                timestamp: "2023-04-09T15:30:00Z",
                likes: 8,
                replies: [
                    {
                        user: "altcoin_trader",
                        comment: "Yep, learned something new today!",
                        timestamp: "2023-04-09T16:00:00Z",
                        likes: 3
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp5VHfvNHP5W3dw89w3LSfQArza_L9N2kog&s",
                user: "nft_creator",
                comment: "Well explained! Would love to see more.",
                timestamp: "2023-04-10T18:45:00Z",
                likes: 15,
                replies: [
                    {
                        user: "digital_collector",
                        comment: "Same here! Love the insights.",
                        timestamp: "2023-04-10T19:10:00Z",
                        likes: 7
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWII85jFwVjGzhdL9xxoqnROQCvbJEWGz32Q&s",
                user: "blockchain_dev",
                comment: "Smart contract part was really insightful.",
                timestamp: "2023-04-11T08:20:00Z",
                likes: 22,
                replies: [
                    {
                        user: "solidity_coder",
                        comment: "Yes! It was explained very well.",
                        timestamp: "2023-04-11T09:00:00Z",
                        likes: 10
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1AGzzaB0JsIh0kIcVL-XPe310wGo_tE1UQ&s",
                user: "web3_pioneer",
                comment: "A must-read for those new to Web3!",
                timestamp: "2023-04-12T12:10:00Z",
                likes: 30,
                replies: [
                    {
                        user: "eth_maxi",
                        comment: "Agreed! Solid breakdown of concepts.",
                        timestamp: "2023-04-12T13:00:00Z",
                        likes: 12
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGhrtGBSQd3tzwWRM88Nwu2onEZENT9zQA&s",
                user: "dapp_builder",
                comment: "This article just made my day!",
                timestamp: "2023-04-13T14:50:00Z",
                likes: 18,
                replies: [
                    {
                        user: "smart_contracts101",
                        comment: "Glad to hear that! It was great content.",
                        timestamp: "2023-04-13T15:30:00Z",
                        likes: 6
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbFuq2n6Tx9oV9NPePEJjtS8MDDfjP-fBiw&s",
                user: "metaverse_enthusiast",
                comment: "Metaverse applications were well explained!",
                timestamp: "2023-04-14T20:30:00Z",
                likes: 25,
                replies: [
                    {
                        user: "vr_traveler",
                        comment: "Right? Excited to see where this tech goes!",
                        timestamp: "2023-04-14T21:10:00Z",
                        likes: 9
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzstqxRca7XpboDRe744m3MqXZoh7s9hTkpA&s",
                user: "defi_trader",
                comment: "Looking forward to more deep dives!",
                timestamp: "2023-04-15T09:05:00Z",
                likes: 14,
                replies: [
                    {
                        user: "crypto_strategist",
                        comment: "Same! Loving the content so far.",
                        timestamp: "2023-04-15T09:45:00Z",
                        likes: 5
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjzI-43Xeg6RlyQ5TAdrLo6ocSnoA7CHilA&s",
                user: "solidity_dev",
                comment: "Smart contract part was on point!",
                timestamp: "2023-04-16T17:40:00Z",
                likes: 19,
                replies: [
                    {
                        user: "eth_coder",
                        comment: "Yeah, I appreciated that section a lot!",
                        timestamp: "2023-04-16T18:20:00Z",
                        likes: 8
                    }
                ]
            },
            {
                profile_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Kyq4lnpz8_nveKJVkaHZWOlt6mmc8dArQ&s",
                user: "tech_investor",
                comment: "Great insights for long-term investors!",
                timestamp: "2023-04-17T11:00:00Z",
                likes: 21,
                replies: [
                    {
                        user: "market_analyst",
                        comment: "Definitely a must-read for investors.",
                        timestamp: "2023-04-17T11:40:00Z",
                        likes: 10
                    }
                ]
            }
        ],
        author: {
            name: "Grace Algorithm",
            profile_url: "https://example.com/profiles/grace-algorithm",
            bio: "Computer Scientist specializing in algorithms and performance optimization."
        }
    }
];