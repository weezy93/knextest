var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
function Albums(){
	return knex('albums');
}

router.post('/', function(req, res){
	Albums().insert({
		artist: req.body.artist,
		name: req.body.name,
		genre: req.body.genre,
		stars: req.body.stars,
		explicit: req.body.explicit
	}, 'id').then(function(result){ // returns id as the result
		res.json(result);
	});
});


// instead of SELECT * FROM ALBUMS, Albums().select
router.get('/', function(req, res){
	Albums().select().then(function(result){
		res.json(result);
	});
});


// .first() ensures that only the first row is returned
router.get("/:id", function(req, res){
	Albums().where('id', req.params.id).first().then(function(result){
		res.json(result);
	});
});



router.put('/:id', function(req, res){
	Albums().where('id', req.params.id).update({
		stars: req.body.stars
	}).then(function(result){
		res.json(result);
	});
});


router.delete('/:id', function(req, res){
	Albums().where('id', req.params.id).del().then(function(result){
		res.json(result);
	});
});