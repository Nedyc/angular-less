var baseFactory = function(){
    var factory = {};
    var persons = [{name:'tony', surname:'bony'}, {name:'beppy', surname:'peppy'}];

    factory.addPerson = function(name, surname){
        persons.push({name: name, surname: surname});
    };

    factory.getPersons = function(){
        return persons;
    }

    return factory;
}