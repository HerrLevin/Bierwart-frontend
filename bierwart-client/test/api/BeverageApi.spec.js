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
    instance = new BierwartApi.BeverageApi();
  });

  describe('(package)', function() {
    describe('BeverageApi', function() {
      describe('18bbaa70c0d47a01455e398c1e6b6d3d', function() {
        it('should call 18bbaa70c0d47a01455e398c1e6b6d3d successfully', function(done) {
          // TODO: uncomment 18bbaa70c0d47a01455e398c1e6b6d3d call and complete the assertions
          /*

          instance.18bbaa70c0d47a01455e398c1e6b6d3d(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BierwartApi.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('5b5e752adb97d9b14175c93f267de9e6', function() {
        it('should call 5b5e752adb97d9b14175c93f267de9e6 successfully', function(done) {
          // TODO: uncomment, update parameter values for 5b5e752adb97d9b14175c93f267de9e6 call
          /*

          instance.5b5e752adb97d9b14175c93f267de9e6(body, function(error, data, response) {
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
      describe('92b02dfc2c3a4e943f4d78d812608d07', function() {
        it('should call 92b02dfc2c3a4e943f4d78d812608d07 successfully', function(done) {
          // TODO: uncomment, update parameter values for 92b02dfc2c3a4e943f4d78d812608d07 call
          /*

          instance.92b02dfc2c3a4e943f4d78d812608d07(body, function(error, data, response) {
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
      describe('fe9c9aecba5dc539aa51291c4809de62', function() {
        it('should call fe9c9aecba5dc539aa51291c4809de62 successfully', function(done) {
          // TODO: uncomment, update parameter values for fe9c9aecba5dc539aa51291c4809de62 call
          /*

          instance.fe9c9aecba5dc539aa51291c4809de62(body, function(error, data, response) {
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
    });
  });

}));