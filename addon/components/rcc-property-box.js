import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['propContainer'],
	leftWidth: 200,
	minWidth: 200,
	leftEdgeOffset: 0,
	isDragging: false,

	didInsertElement: function() {
        this.set('minWidth', this.get('leftWidth'));
    },

	dragStart: function (event) {
    	//debugger;

    	this.set('isDragging', true);
    	this.set('leftEdgeOffset', event.originalEvent.pageX - this.get('leftWidth'));
    },

    dragEnd: function (event) {
        // Let the controller know this view is done dragging
        if (this.get('isDragging')) {
        	this.set('isDragging', false);

        	this.set('leftWidth', event.originalEvent.pageX - this.get('leftEdgeOffset'));
        }
        return false;
    },

    drag: function (event) {
	    if (event.originalEvent.pageX > 0) {
	        if (this.get('isDragging')) {
	            this.set('leftWidth', event.originalEvent.pageX - this.get('leftEdgeOffset'));
	        }
	    }
        return false;
    }
});
