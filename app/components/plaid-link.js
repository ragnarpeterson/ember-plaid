import PlaidLink from 'ember-plaid/components/plaid-link';
import config from '../config/environment';

const plaidConfig = config['ember-plaid'];

export default PlaidLink.extend({
  clientName: plaidConfig.clientName,
  product: plaidConfig.product,
  key: plaidConfig.key,
  env: plaidConfig.env
});
