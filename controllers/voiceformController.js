exports.index = function(req, res) {
    res.render('voiceform', { title: 'Voiceform' });
};

exports.post_voice = function(req, res) {
    res.send('This is a post');
};

exports.get_voice = function(req, res) {
    res.send('This is a get');
};
