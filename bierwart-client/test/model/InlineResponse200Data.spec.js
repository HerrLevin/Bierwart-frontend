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
    describe('InlineResponse200Data', function() {
      beforeEach(function() {
        instance = new BierwartApi.InlineResponse200Data();
      });

      it('should create an instance of InlineResponse200Data', function() {
        // TODO: update the code to test InlineResponse200Data
        expect(instance).to.be.a(BierwartApi.InlineResponse200Data);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

    });
  });

}));
