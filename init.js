(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var Config = {};
    
    Config.host = "https://soldapp.herokuapp.com";
    Config.port = process.env.PORT || 3000;
    Config.urlPrefix = '/spika';
    Config.socketNameSpace = '/spika';

    Config.imageDownloadURL = "http://" + Config.host + "/:" + Config.port + Config.urlPrefix + "/media/images/";
    Config.noavatarImg = "http://" + Config.host + ":" + Config.port + Config.urlPrefix + "/img/noavatar.png";

    Config.chatDatabaseUrl = "mongodb://soldapp1:123@ds019786.mlab.com:19786/spika";
	// Config.chatDatabaseUrl = "mongodb://localhost/simplemessenger";
  
   Config.dbCollectionPrefix = "spika_";
    
    Config.uploadDir = 'public/uploads/';
    Config.sendAttendanceMessage = true;
    
    Config.stickerBaseURL = 'https://soldapp.herokuapp.com/spika';
    Config.stickerAPI = Config.stickerBaseURL + '/api/v2/stickers/56e005b1695213295419f5df';
    
    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);
