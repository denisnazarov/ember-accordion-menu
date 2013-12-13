export default Ember.Route.extend({
  model: function() {
    return accordion_object;
  }
});

var x = {};
var accordion_object = {
  'root': {
    'level 1.1': {
      'level 1.1.1': {
        'level 1.1.1.1': x,
        'level 1.1.1.2': x
      },
      'level 1.1.2': {
        'level 1.1.2.1': x,
        'level 1.1.2.2': x,
        'level 1.1.2.3': x
      }
    },
    'level 1.2': {
      'level 1.2.1': x,
      'level 1.2.2': x
    }
  }
};
