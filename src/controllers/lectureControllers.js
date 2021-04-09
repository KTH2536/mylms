// 임시 가상 데이터?
let lectures = [ 
    {
        id: 1,
        title: "python",
        level: "0"
    },
    {
        id: 2,
        title: "C++",
        level: "0"
    }
];

const user = {
        name: "KTH2536",
        loggedIn: false
    };

export const handleLectures = (req, res) => {
    const { id } = req.params;
    const course = lectures[id-1];
    console.log(`Watching lectuer No.${id}`);
    return res.render('lectures.pug', { course, user, pageTitle:"temp", lectures });
};

export const handleCourse = (req, res) => {
    const { id } = req.params;
    const course = lectures[id-1];
    return res.render('course.pug', { course, user, pageTitle:"temp", lectures });
};