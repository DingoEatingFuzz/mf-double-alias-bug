import Fragment from 'model-fragments/fragment';
import {
  fragmentArray,
} from 'model-fragments/attributes';
import attr from 'ember-data/attr';

export default Fragment.extend({
  innerFragments: fragmentArray('inner-fragment'),
  other: attr(),
});
