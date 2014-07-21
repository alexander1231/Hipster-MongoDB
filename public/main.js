$('document').ready(function () {
	
	var data = {}
	data.name = 'hans'

	console.log('hello server!! please save this data:', data)

	$.get( "/save-to-database", data, function( res ) {
		console.log(res)
	})
})