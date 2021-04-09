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

export const getLectures = (req, res) => {
    const { id } = req.params;
    const lecture = lectures[id-1];
    console.log(`Watching lectuer No.${id}`);
    return res.render('lectures.pug', { lecture, user, pageTitle:"temp", lectures });
};

export const getLecture = (req, res) => {
    const { id } = req.params;
    const lecture = lectures[id-1];
    return res.render('lectureEdit.pug', { lecture, user, pageTitle:"temp", lectures });
};

export const postLecture = (req, res) => {
    const { id } = req.params;
    return res.redirect(`/lectures/${id}`);
};