const path = require('path');


exports.show_index = (req, res)=> {
	res.sendFile(path.join(appRoot, 'www','index.html'));
};


