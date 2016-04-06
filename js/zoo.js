(function(ns) {
    'use strict';

    function getAnimals(callback) {
        // Pretend this is an Ajax call!!
        setTimeout(function fakeAjax() {
            callback([
                { species: 'zebra', name: 'Jim' },
                { species: 'orangutan', name: 'Bill' },
                { species: 'otter', name: 'Hector' },
                { species: 'otter', name: 'Amy' },
                { species: 'bear', name: 'Sofia' },
                { species: 'tiger', name: 'Lucille' },
                { species: 'tiger', name: 'Octavius' }
            ]);
        }, 250);
    }

    /**
     * Takes in an animal species (optionally) and adds animals from an
     * ajax call to a list on the page. If a `type` is given, only
     * animals of that species will be added to the page. If no `type`
     * is provided, ALL animals will be added to the list.
     *
     * The production HTML looks like this:
     *    <section>
     *      <ul class='animals'></ul>
     *    </section>
     *
     * @param  {String}   type     The animal species to restrict our list to
     * @param  {Function} callback Executed after animals are added to our list in the HTML
     * @return {undefined}
     */
    ns.listAnimals = function listAnimals(type, callback) {
        getAnimals(function getAnimalsCallback(animals) {
// this function executes get

            animals.forEach(function iterateOnAnimals(animal) {

                if (type && animal.species === type) {
                    $('ul.animals').append('<li>' + animal.name + '</li>');
                } else if (!type) {
                    $('ul.animals').append('<li>' + animal.name + '</li>');
                }

            });

            callback(animals);
        });
    };

    /**
     * Retrieves all animals and counts animals by their species. The callback
     * will be executed with an object that contains each animal species and
     * how many of each animal exist for that species. For example:
     * {
     *   'gorilla': 5,
     *   'lion': 2
     * }
     *
     * @param  {Function} callback Will be executed with the count of animals
     * @return {undefined}
     */
    ns.countAnimalsByType = function countAnimalsByType(callback) {
        getAnimals(function doAnimalCount(animals) {
            var count = {};

            animals.forEach(function countEachAnimal(animal) {
                if (!count[animal.species]) {
                    count[animal.species] = 1;
                } else {
                    count[animal.species]++;
                }
            });

            callback(count);
        });
    };


    window.zoo = ns;
})(window.zoo || {});
