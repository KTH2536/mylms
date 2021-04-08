let lectures = [
    {
        title: "python",
        level: "5",
        id: 1
    },
    {
        title: "C++",
        level: "2",
        id: 2
    }
];

const user = {
        name: "KTH2536",
        loggedIn: false
    };

export const handleLectures = (req, res) => {
    const { id } = req.params;
    const lecture = lectures[id-1];
    console.log(`Watching lectuer No.${id}`);
    return res.render('lectures.pug', { lecture, user, pageTitle: lecture.title });
}
