import Ember from 'ember';

const DEFAULT_LABEL = 'Link Bank Account';
const OPTIONS = [
  'clientName',
  'product',
  'key',
  'env',
  'webhook',
  'longtail',
  'selectAccount',
  'token'
];

export default Ember.Component.extend({
  tagName: 'button',
  type: 'button',
  action: 'processPlaidToken',
  attributeBindings: ['type'],

  label: DEFAULT_LABEL,
  institution: null,
  clientName: null,
  product: null,
  key: null,
  env: null,
  webhook: null,
  selectAccount: null,
  token: null,

  _link: null,

  didInsertElement() {
    const options = Ember.merge(this.getProperties(OPTIONS), {
      onSuccess: this._onSuccess.bind(this)
    });

    this._link = Plaid.create(options);
  },

  click() {
    this._link.open(this.get('institution'));
  },

  _onSuccess(token, meta) {
    this.sendAction('action', token, meta);
  }
});
