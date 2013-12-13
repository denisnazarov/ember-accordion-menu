var TitleView = Ember.View.extend({
  classNames: ['title-view'],
  context: function() { return this; }.property(),
  content: null,
  template: Ember.Handlebars.compile("{{content}} {{parentView.activeState}}"),
  click: function(){
    this.show();
  },
  show: function(){
    var nodeView = this.get('parentView');
    nodeView.collapseSiblings();
  },
  hide: Ember.K
});

export default TitleView;
