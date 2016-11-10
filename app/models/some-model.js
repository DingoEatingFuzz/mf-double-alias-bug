import Model from 'ember-data/model';
import {
  fragment,
} from 'model-fragments/attributes';

export default Model.extend({
  someProp: fragment('outer-fragment'),
});
