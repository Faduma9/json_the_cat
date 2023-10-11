const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // We expect no error for this scenario
      assert.equal(err, null);

      it('returns an error for an invalid/non-existent breed, via callback', (done) => {
        fetchBreedDescription('InvalidBreedName', (err, desc) => {
          // We expect an error for this scenario
          assert.isNotNull(err);
          assert.isNull(desc); // Description should be null
      
          done(); // Don't forget to call done() to signal the end of the test
        });
      });
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // Compare the returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});
