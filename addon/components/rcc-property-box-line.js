
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	classNames: ['propRow'],
	leftWidth: Ember.computed.readOnly('parentView.leftWidth')
});