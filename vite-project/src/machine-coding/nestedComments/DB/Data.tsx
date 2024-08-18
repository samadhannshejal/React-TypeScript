import { MyComments } from "../component/Comments";

export const commentData: MyComments[] = [
    {
        id: "1",
        userName: "samadhan",
        comment: "Hello, how are you?",
        replies: [
            {
                id: "2",
                userName: "baba don",
                comment: "I am fine, thank you! How about you?",
                replies: [
                    {
                        id: "3",
                        userName: "samadhan",
                        comment: "I'm doing well, thanks for asking!",
                    },
                ],
            },
            {
                id: "4",
                userName: "alexa",
                comment: "What are you guys up to?",
            },
        ],
    },
    {
        id: "5",
        userName: "Jony",
        comment: "Today is a nice day.",
        replies: [
            {
                id: "6",
                userName: "baba don",
                comment: "Indeed, the weather is great!",
            },
            {
                id: "7",
                userName: "doe",
                comment: "Let's go out and enjoy the sunshine.",
                replies: [
                    {
                        id: "8",
                        userName: "Jony",
                        comment: "Sounds like a plan!",
                    },
                    {
                        id: "9",
                        userName: "alexa",
                        comment: "Count me in!",
                    },
                ],
            },
        ],
    },
    {
        id: "10",
        userName: "Mike",
        comment: "Has anyone watched the latest movie?",
        replies: [
            {
                id: "11",
                userName: "Jony",
                comment: "Yes, I saw it yesterday.",
                replies: [
                    {
                        id: "12",
                        userName: "Mike",
                        comment: "What did you think of it?",
                    },
                    {
                        id: "13",
                        userName: "Jony",
                        comment: "It was fantastic! Highly recommend it.",
                    },
                ],
            },
            {
                id: "14",
                userName: "baba don",
                comment: "I haven't seen it yet, but I plan to.",
            },
        ],
    },
    {
        id: "15",
        userName: "Emma",
        comment: "What's everyone working on today?",
        replies: [
            {
                id: "16",
                userName: "doe",
                comment: "I'm working on a new project at work.",
            },
            {
                id: "17",
                userName: "Mike",
                comment: "Just finishing up some tasks.",
                replies: [
                    {
                        id: "18",
                        userName: "Emma",
                        comment: "Great! Keep up the good work!",
                    },
                ],
            },
        ],
    },
];