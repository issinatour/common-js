// this is just a mock for demo purpose
module.exports = {
  createHmac: () => ({
    update() { return this },
    digest() {
      return 'bbd1fba4a3848c751e24b7b6d7afc33da8a63973c14c59ca8f53b7a6230eba9a';
    }
  })
};