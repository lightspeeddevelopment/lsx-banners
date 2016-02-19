// Uploading files
var image_picker_frame;

jQuery(function($){

	
	$(document).on('click', '.uix-image-remover', function( e ){
		
		e.preventDefault();
		var clicked = $( this ),
			target = $( clicked.data('target') );

		if( !target.length ){
			alert(' No Target set');
			return;
		}

		target.val('{}').trigger('change');
	});

	$(document).on('click', '.uix-image-picker', function( e ){
		
		e.preventDefault();
		var clicked = $( this ),
			target = $( clicked.data('target') );

		if( !target.length ){
			alert(' No Target set');
			return;
		}
		if ( !image_picker_frame ) {

			// Create the media frame.
			image_picker_frame = wp.media({
				title: clicked.data( 'title' ),
				button: {
					text: clicked.data( 'button' ),
				},
				library: { type: 'image'},
				multiple: true
			});
		}
		var select_handler = function(e){
			attachment = image_picker_frame.state().get('selection').first().toJSON();

			if( typeof attachment.sizes.medium  !== 'undefined' ){
				attachment.thumbnail = attachment.sizes.medium.url;
			}else if( typeof attachment.sizes.full !== 'undefined' ){
				attachment.thumbnail = attachment.sizes.full.url;
			}else{
				attachment.thumbnail = attachment.url;
			}
			target.val( JSON.stringify( attachment ) ).trigger('change');
			//window[clicked.data('callback')]();
		};
		image_picker_frame.on( 'select', select_handler);
		image_picker_frame.open();
	});

})
