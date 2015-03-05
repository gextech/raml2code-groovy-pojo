var test = require("raml2code-fixtures").raml2codeIntegration,
  chai = require('chai');
chai.should();


describe('Must run on raml2code', function () {

  var generator = require("../lib/groovy-pojo");
  var catDTO = function(done){
    test(done, "index.raml", generator ,{package: 'org.gex', enableAnnotations: false},
      "groovy/pogo/CatDTO.groovy" , "v1/ComplexCat.groovy")
  };


  it('should generate a dto from a RAML file', catDTO );


});
