/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	click: function(req,res){
		sails.io.sockets.emit("emoji", {verb:"clicked", data:{from: req.param('sender'), row: req.param('row')}})
	}

};
