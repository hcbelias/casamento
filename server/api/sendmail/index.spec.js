'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sendmailCtrlStub = {
  index: 'sendmailCtrl.index',
  show: 'sendmailCtrl.show',
  create: 'sendmailCtrl.create',
  update: 'sendmailCtrl.update',
  destroy: 'sendmailCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sendmailIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './sendmail.controller': sendmailCtrlStub
});

describe('Sendmail API Router:', function() {

  it('should return an express router instance', function() {
    sendmailIndex.should.equal(routerStub);
  });

  describe('GET /api/sendmails', function() {

    it('should route to sendmail.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sendmailCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/sendmails/:id', function() {

    it('should route to sendmail.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sendmailCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/sendmails', function() {

    it('should route to sendmail.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sendmailCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/sendmails/:id', function() {

    it('should route to sendmail.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'sendmailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/sendmails/:id', function() {

    it('should route to sendmail.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'sendmailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/sendmails/:id', function() {

    it('should route to sendmail.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sendmailCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
