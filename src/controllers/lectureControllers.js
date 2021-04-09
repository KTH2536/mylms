// 임시 가상 데이터?
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
        level: "0"
    }
];

const user = {
        name: "KTH2536",
        loggedIn: false
    };

export const getLecture = (req, res) => {
    const { id } = req.params;
    const lecture = lectures[id-1];
    console.log(`Watching lectuer No.${id}`);
    return res.render('lectures.pug', { lecture, user, pageTitle:"temp" });
};

export const editLectures = (req, res) => {
    const { id } = req.params;
    const lecture = lectures[id-1];
    return res.render('lectureEdit.pug', { lecture, user, pageTitle:"temp22" });
};

export const postCourse = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    lectures[id-1].title = title;
    return res.redirect(`/lectures/${id}`);
};

export const getUpload = (req, res) => {
    return res.render('upload.pug', { pageTitle:"Upload", user });
};

export const postUpload = (req, res) => {
    return res.redirect('/');
};