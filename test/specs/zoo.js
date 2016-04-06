(function() {
  'use strict';

  var assert = chai.assert;

  var fixtureHTML = $('#fixtures').html();

  suite('animal species', function(){

    setup(function(){

      $('#fixtures').html(fixtureHTML);

    });

    test('listAnimals function', function(doneCallback) {

      assert.strictEqual( $('.animals li').length, 0, 'animals li is empty to start' );

      var returnValue = window.zoo.listAnimals( 'otter', function testCallback() {
        var assertError;
        try{
          assert.strictEqual( $('.animals li').length, 2, 'animals list exists' );
        } catch(err) {
          assertError = err;
        }
        doneCallback(assertError);
      });


    });

    test('listAnimals function', function(doneCallback) {

      var speciesCheck = window.zoo.listAnimals( 'peacock', function testCallback() {
        var assertError;
        try{
          assert.strictEqual( $('.animals li').length, 0, '' );
        } catch(err) {
          assertError = err;
        }
        doneCallback(assertError);
      });


    });

    test('countAnimalsByType function', function(doneCallback) {

      var countCheck = window.zoo.countAnimalsByType(function testCallback(count) {
        var assertError;
        try{
          assert.strictEqual( Object.keys(count).length , 5,  'check that counter works with animals array' );
        } catch(err) {
          assertError = err;
        }
        doneCallback(assertError);
      });


    });


  });


})();
