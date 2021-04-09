let lectures = [ 
    {
        id: 1,
        title: "python",
        level: "0",
        course: 
        [
            {
                id: 1,
                title: "testCourse",
                description: "blabla"
            },
            {
                id: 2,
                title: "testCourse2",
                description: "glagla"
            }
        ]
    },
    {
        id: 2,
        title: "C++",
        level: "0",
        course: 
        {
            id: 2,
            title: "potato",
            description: "blabla"
        }
    }
];

const user = {
        name: "KTH2536",
        loggedIn: false
    };

export const watchCourse = (req, res) => {
    const { id } = req.params;
    const course = lectures[id-1].course;
    return res.render('courses.pug', { course, user});
}