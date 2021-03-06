import chai from 'chai';
import chaiHttp from 'chai-http';
import constData from '../helpers/consts.json'
const expect = chai.expect;
chai.use(chaiHttp);

describe('First test suite', function () {
  it('Assert', async function () {
    expect(true).to.be.true;
    expect(constData.name).to.equal('test')
    let x = await chai.request('https://reqres.in/').get('api/users/2').set('content-type', 'application/json').send();
  })
})