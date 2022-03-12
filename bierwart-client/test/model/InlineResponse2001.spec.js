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

  describe('(package)', function() {
    describe('InlineResponse2001', function() {
      beforeEach(function() {
        instance = new BierwartApi.InlineResponse2001();
      });

      it('should create an instance of InlineResponse2001', function() {
        // TODO: update the code to test InlineResponse2001
        expect(instance).to.be.a(BierwartApi.InlineResponse2001);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
