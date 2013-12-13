import NodeView from "appkit/views/node";
import TitleView from "appkit/views/title";

var AccordionView = Ember.ContainerView.extend({
  content: null,
  classNames: ['accordion'],
  classNameBindings: ['nodeState'],
  
  nodeState: Ember.computed.alias('parentView.activeState'),
  
  collapseChildren: function(){
    var childViews = this.get('childViews');
    childViews.forEach(function(childView){
      if (childView.get('activeState') === 'active'){
        childView.slideUp();
      }
    });
  },
  
  show: Ember.K,
  hide: Ember.aliasMethod('collapseChildren'),
  
  generateTree: function(){
    var self = this;
    var data = this.get('content'),
        keys = Ember.keys(data);
    
    keys.forEach(function(key) {
      var level = self.get('level');
      var value = data[key],
          containerView = NodeView.create({
            activeState: (level === 0 ? 'active' : 'hidden') 
          }),
          titleView = TitleView.create({
            content: key
          });
      
      level = level + 1;
      containerView.get('childViews').pushObject(titleView);
      
      if (value !== {}){
        containerView.get('childViews').pushObject(AccordionView.create({content: value, level: level}));
      }   
      self.get('childViews').pushObject(containerView);
    });
    
  }.on('didInsertElement')
});

export default AccordionView;
