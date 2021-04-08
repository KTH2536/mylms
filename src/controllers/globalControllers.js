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

export const handleHome = (req, res) =>
{
    return res.render('home.pug', {pageTitle: "Home", lectures, user});
}