var NodeView = Ember.CollectionView.extend({
  classNames: ['node'],
  collapseSiblings: function(){
    this.get('parentView').collapseChildren();
    this.show();
  },
  slideUp: function(){
    var self = this;
    this.get('childViews')[1].$().slideUp(function(){
      self.hide();
    });
  },
  show: function(){
    this.set('activeState', 'active');
    this.get('childViews')[1].$().slideDown();
  },
  hide: function(){
    this.set('activeState', 'hidden');
    this.get('childViews').forEach(function(view) {
      view.hide();
    });
  }
});

export default NodeView;
