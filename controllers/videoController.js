export const home = (req, res) => res.render('home', { pageTitle: 'Home'});
export const search = (req, res) => {
    const {
        query: { q: searching }
    } = req;
    res.render('search.pug', { pageTitle: searching, searching});
};
export const videos = (req, res) => res.render('videos.pug', { pageTitle: 'Videos'});
export const upload = (req, res) => res.render('upload.pug', { pageTitle: 'Upload'});
export const videoDetail = (req, res) => res.render('videoDetail.pug', { pageTitle: 'VideoDetail'});
export const editVideo = (req, res) => res.render('editVideo.pug', { pageTitle: 'EditVideo'});
export const deleteVideo = (req, res) => res.render('deleteVideo.pug', { pageTitle: 'DeleteVideo'});