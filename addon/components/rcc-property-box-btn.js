import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',

	actions: {
        actDelete: function () {

			this.sendAction('actDelete', this.get('value'), false);
        },

        actSave: function () {

			this.sendAction('actSave', this.get('value'));
        }
    }
});
