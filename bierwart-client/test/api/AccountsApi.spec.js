/*
 * Bierwart API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BierwartApi);
  }
}(this, function(expect, BierwartApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BierwartApi.AccountsApi();
  });

  describe('(package)', function() {
    describe('AccountsApi', function() {
      describe('431372499f0d5c231019257788f9941f', function() {
        it('should call 431372499f0d5c231019257788f9941f successfully', function(done) {
          // TODO: uncomment, update parameter values for 431372499f0d5c231019257788f9941f call
          /*

          instance.431372499f0d5c231019257788f9941f(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('f7498f1c466dd6b0f6d5d50c867bc9d8', function() {
        it('should call f7498f1c466dd6b0f6d5d50c867bc9d8 successfully', function(done) {
          // TODO: uncomment f7498f1c466dd6b0f6d5d50c867bc9d8 call and complete the assertions
          /*

          instance.f7498f1c466dd6b0f6d5d50c867bc9d8(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
