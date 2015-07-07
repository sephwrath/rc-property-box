import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	isExpanded: true,
	leftWidth: Ember.computed.readOnly('parentView.leftWidth'),

	actions:{
    	toggleExpanded: function(){
      		this.toggleProperty('isExpanded');
    	}
  	}
});
