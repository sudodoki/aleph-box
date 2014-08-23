var expect = require('chai').expect;
var sinon = require('sinon');
require('./helpers');
var randomObject = require('../index');
// everything with .skip wasn't yet tested
// everythin with xdescribe wasn't yet implemented
describe('randomObject', function() {
    it('should be definded', function() {
        expect(randomObject).to.be.a('function')
    });
    it('should return an object', function() {
        expect(new randomObject()).to.be.an('object')
    });
    it('should have zero keys', function() {
        expect(Object.keys(new randomObject()).length).to.equal(0)
    });

    describe('given different properties', function() {
        var subject;
        beforeEach(function() {
            subject = new randomObject();
        });

        describe('like name', function() {
            it('should return its value ', function() {
                expect(subject.name).to.be.name;
            })
        });

        describe('like flag', function() {
            it('should return its value', function() {
                expect(subject.flag).to.be.a('boolean');
            })
        });

        describe('like char', function() {
            it('should return its value', function() {
                expect(subject.char).to.be.a('string');
                expect(subject.char.length).to.equal(1);
            })
        });

        xdescribe('like float', function() {
            it('should return its value', function() {
                expect(subject.float).to.be.float;
            })
        });

        xdescribe('like int', function() {
            it('should return its value', function() {
                expect(subject.int).to.be.int;
            })
        });

        describe('like fullDescription', function() {
            it('should return its value', function() {
                expect(subject.fullDescription).to.be.paragraph;
            })
        });

        describe('like shortDescription', function() {
            it('should return its value', function() {
                expect(subject.shortDescription).to.be.sentence;
            })
        });

        describe('like abbr', function() {
            it('should return its value', function() {
                expect(subject.abbr).to.match(/[a-z]+/);
            })
        });

        describe('like acronym', function() {
            it('should return its value', function() {
                expect(subject.acronym).to.match(/[A-Z]+/);
            })
        });

        describe('like word', function() {
            it('should return its value', function() {
                expect(subject.word).to.be.match(/\w+/);
            })
        });

        describe('like percents', function() {
            it('should return its value', function() {
                expect(subject.percents).to.be.int;
                expect(subject.percents).to.be.above(0);
                expect(subject.percents).to.be.below(100);
            })
        });

        describe('like age', function() {
            it('should return its value', function() {
                expect(subject.age).to.be.int;
                expect(subject.percents).to.be.above(0);
                expect(subject.percents).to.be.below(100);
            })
        });

        describe('like DOB', function() {
            it('should return its value', function() {
                expect(subject.DOB).to.be.a('date');
            })
        });

        describe('like birthday', function() {
            it('should return its value', function() {
                expect(subject.birthday).to.be.a('date');
            })
        });

        describe('like name', function() {
            it('should return its value', function() {
                expect(subject.name).to.be.name;
            })
        });

        describe('like firstName', function() {
            it('should return its value', function() {
                expect(subject.firstName).to.be.name;
            })
        });
        describe('like gender', function() {
            it('should return its value', function() {
                expect(subject.gender).to.be.gender;
            })
        });

        describe('like sex', function() {
            it('should return its value', function() {
                expect(subject.sex).to.be.gender;
            })
        });

        describe('like lastName', function() {
            it('should return its value', function() {
                expect(subject.lastName).to.be.surname;
            })
        });

        describe('like surname', function() {
            it('should return its value', function() {
                expect(subject.surname).to.be.surname;
            })
        });

        describe('like familyName', function() {
            it('should return its value', function() {
                expect(subject.familyName).to.be.surname;
            })
        });

        describe('like fullName', function() {
            it('should return its value', function() {
                expect(subject.fullName).to.match(/[A-Z][a-z]+ (Mc)?[A-Z][a-z]+/);
            })
        });

        describe('like email', function() {
            it('should return its value', function() {
                expect(subject.email).to.be.a('string');
                expect(subject.email).to.match(/[^\.]+@[^\.]+/);
            })
        });

        describe('like facebookId', function() {
            it('should return its value', function() {
                expect(subject.facebookId).to.match(/\d{1,15}/);
            })
        });

        describe('like fbid', function() {
            it('should return its value', function() {
                expect(subject.fbid).to.be.to.match(/\d{1,15}/)
            })
        });

        describe('like twitter', function() {
            it('should return its value', function() {
                expect(subject.twitter).to.be.handle;
            })
        });

        describe('like handle', function() {
            it('should return its value', function() {
                expect(subject.handle).to.be.handle;
            })
        });

        describe('like twitterHandle', function() {
            it('should return its value', function() {
                expect(subject.twitterHandle).to.be.handle;
            })
        });

        describe('like address', function() {
            it('should return its value', function() {
                expect(subject.address).to.match(/\d+ [A-Z]\w+ [A-Z]\w+/);
            })
        });

        describe('like phone', function() {
            it('should return its value', function() {
                expect(subject.phone).to.match(/\(\d{3}\) \d{3}-\d{4}/);
            })
        });

        describe('like state', function() {
            it('should return its value', function() {
                expect(subject.state).to.match(/[A-Z]{2,3}/);
            })
        });

        describe('like city', function() {
            it('should return its value', function() {
                expect(subject.city).to.be.name;
            })
        });

        describe('like street', function() {
            it('should return its value', function() {
                expect(subject.street).to.match(/[A-Z][a-z]+ [A-Z][a-z]+/);
            })
        });

        describe('like zip', function() {
            it('should return its value', function() {
                expect(subject.zip).to.match(/\d{5}/);
            })
        });

        describe('like coordinates', function() {
            it('should return its value', function() {
                parts = subject.coordinates.split(', ');
                expect(parts[0]).to.be.coordinate;
                expect(parts[1]).to.be.coordinate;
            })
        });

        describe('like latitude', function() {
            it('should return its value', function() {
                expect(subject.latitude).to.be.coordinate;
            })
        });

        describe('like lat', function() {
            it('should return its value', function() {
                expect(subject.lat).to.be.coordinate;
            })
        });

        describe('like longitude', function() {
            it('should return its value', function() {
                expect(subject.longitude).to.be.coordinate;
            })
        });

        describe('like lng', function() {
            it('should return its value', function() {
                expect(subject.lng).to.be.coordinate;
            })
        });

        xdescribe('like prefixedFullName', function() {
            it('should return its value', function() {
                expect(subject.prefixedFullName).to.be.prefixedFullName;
            })
        });

        describe('like title', function() {
            it('should return its value', function() {
                expect(subject.title).to.match(/^(Mr|Mrs|Ms|Miss|Dr).?$/);
            })
        });

        describe('like ssn', function() {
            it('should return its value', function() {
                expect(subject.ssn).to.be.securityNumber;
            })
        });

        describe('like securityNumber', function() {
            it('should return its value', function() {
                expect(subject.securityNumber).to.be.securityNumber;
            })
        });

        describe('like color', function() {
            it('should return its value', function() {
                expect(subject.color).to.match(/#[a-e\d]{6}|#[a-f\d]{3}|rgb\(\d{1,3},\d{1,3},\d{1,3}\)/);
            })
        });

        describe('like domain', function() {
            it('should return its value', function() {
                expect(subject.domain).to.match(/[a-z]+/);
            })
        });

        describe('like hashtag', function() {
            it('should return its value', function() {
                expect(subject.hashtag).to.match(/#\w+/);
            })
        });

        describe('like ip', function() {
            it('should return its value', function() {
                expect(subject.ip).to.match(/(\d{1,3}\.?){4}/);
            })
        });

        describe('like date', function() {
            it('should return its value', function() {
                expect(subject.date).to.be.a('date');
            })
        });

        describe('like year', function() {
            it('should return its value', function() {
                expect(subject.year).to.match(/\d{4}/);
            })
        });

        describe('like month', function() {
            it('should return its value', function() {
                var months = [ "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December" ]
                expect(months).to.contain(subject.month);
            })
        });

        describe('like hour', function() {
            it('should return its value', function() {
                expect(subject.hour).to.be.int;
                expect(subject.hour).to.be.least(0);
                expect(subject.hour).to.be.most(12);
            })
        });

        describe('like minute', function() {
            it('should return its value', function() {
                expect(subject.minute).to.be.int;
                expect(subject.minute).to.be.least(0);
                expect(subject.minute).to.be.below(60);
            })
        });

        describe('like hourSuffix', function() {
            it('should return its value', function() {
                expect(subject.hourSuffix).to.match(/am|pm/);
            })
        });

        describe('like timestampMili', function() {
            it('should return its value', function() {
                expect(subject.timestampMili).to.match(/\d{1,13}/);
            })
        });

        describe('like timestamp', function() {
            it('should return its value', function() {
                expect(subject.timestamp).to.match(/\d{1,10}/);
            })
        })
    });

    describe('given nested objects call', function() {
        var subject;
        beforeEach(function() {
            subject = new randomObject();
        });

        it('should call properties on it', function() {
            expect(subject.person.name).to.be.name;
        });

        describe('however deep', function() {
            it('still should call properties on it', function() {
                expect(subject.person.daughters[0].name).to.be.name;
            })
        })
    });

    describe('should be iterable', function() {
        describe('by #forEach', function() {
            var eachSpy;
            var subject;

            beforeEach(function() {
                subject = new randomObject()
            });

            beforeEach(function() {
                eachSpy = sinon.spy()
            });

            beforeEach(function() {
                subject.people.forEach(eachSpy)
            });

            it('should invoke callback', function() {
                expect(eachSpy.called).to.equal(true)
            });

            it('should call calllback for each item', function() {
                expect(eachSpy.callCount).to.equal(subject.people.length)
            });

            it('should pass in arguments for callback', function() {
                // Aleph, index, all
                var args = eachSpy.args[0];
                expect(args[0].name).to.be.name;
                expect(args[1]).to.be.a('number');
                expect(args[2]).to.be.an('array');
            })
        });

        describe('by #map', function() {
            var result;
            var subject;

            beforeEach(function() {
                subject = new randomObject();
            });

            beforeEach(function() {
                result = subject.people.map(function(item) {
                    return item.name;
                })
            });

            describe('should return an array of results', function() {
                it('should be length of all the values', function() {
                    expect(result.length).to.equal(subject.people.length)
                });

                it('should be of needed type', function() {
                    result.forEach(function(item) {
                        expect(item).to.be.name;
                    })
                })
            })
        })
    })
});