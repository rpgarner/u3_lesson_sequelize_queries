'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const businesses = [...Array(100)].map((_) => {
      const address = `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.stateAbbr()}`
      return {
        name: faker.company.companyName(),
        address: address,
        rating: faker.datatype.number({ min: 0, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('businesses', businesses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
  }
}
