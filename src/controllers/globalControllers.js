//  가상
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

export const handleHome = (req, res) =>
{
    return res.render('home.pug', {pageTitle: "Home", lectures, user});
};

export const getLogin = (req, res) =>
{
    return res.render('login.pug');
};

export const postLogin = (req, res) =>
{
    const { email, password } = req.body;
    console.log(`The Email is: ${email} and The Password is: ${password}`);
    return res.redirect('/');
};