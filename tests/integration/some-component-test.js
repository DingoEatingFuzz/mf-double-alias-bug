import Ember from 'ember';
import Pretender from 'pretender';
import hbs from 'htmlbars-inline-precompile';
import { test, moduleForComponent } from 'ember-qunit';

var beforeRecord = {
  data: {
    type: 'some-model',
    id: 1,
    attributes: {
      'some-prop': {
        'inner-fragments': [
          { prop1: 'foo', prop2: 'bar' },
        ],
        'other': 'asdf',
      }
    }
  }
};

var afterRecord = {
  data: {
    type: 'some-model',
    id: 1,
    attributes: {
      'some-prop': {
        'inner-fragments': [
          { prop1: 'foo', prop2: 'bar' },
          { prop1: 'baz', prop2: 'qux' },
        ],
        'other': 'asdf',
      }
    }
  }
};

moduleForComponent('some-component', 'Some Component Tests', {
  integration: true,
});

test('changing properties and saving should work', function(assert) {
  var done = assert.async();
  var api = startAPI();
  var store = this.container.lookup('service:store');

  Ember.run(() => {
    store.findRecord('some-model', 1).then(model => {
      this.setProperties({ model });
      this.render(hbs`{{some-component model=model}}`);

      model.get('someProp.innerFragments').createFragment({
        prop1: 'baz',
        prop2: 'qux',
      });

      model.save().then(() => {
        assert.ok(true);
        api.shutdown();
        done();
      });
    });
  });

});

function startAPI() {
  var api = new Pretender(function() {
    this.get('/some-models/:id', function() {
      return [ 200, {}, beforeRecord ];
    });

    this.patch('/some-models/:id', function() {
      return [ 200, {}, afterRecord ];
    });
  });

  api.prepareHeaders = function(headers) {
    headers['content-type'] = 'application/json';
    return headers;
  };

  api.prepareBody = function(body) {
    return JSON.stringify(body || {});
  };

  return api;
}
