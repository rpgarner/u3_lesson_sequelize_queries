const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusinesses = async () => {
  const businesses = await Business.findAll()
  stringify(businesses)
}

const findBusinessById = async () => {
  const business = await Business.findByPk(200)
  stringify(business)
}

const findBusinessesWhere = async () => {
  const businesses = await Business.findAll({ where: { rating: 5 } })
  stringify(businesses)
}

const findBusinessLike = async () => {
  const business = await Business.findAll({
    where: {
      name: {
        [Op.like]: '%Howe%'
      }
    }
  })
  stringify(business)
}

const findBusinessesWithRating = async () => {
  const businesses = await Business.findAll({
    where: {
      rating: {
        [Op.between]: [1, 3]
      }
    }
  })
  stringify(businesses)
}

const findBusinessLimitOrder = async () => {
  const businesses = await Business.findAll({
    where: {
      rating: {
        [Op.gte]: 2
      }
    },
    order: [['rating', 'DESC']],
    limit: 10
  })
  stringify(businesses)
}

const findOneBusiness = async () => {
  const business = await Business.findOne({ where: { rating: 4 } })
  stringify(business)
}

const createBusiness = async () => {
  const business = await Business.create({
    name: "Fry's",
    rating: 3,
    address: '123 Wallaby Way, Sydney, AUS'
  })
  stringify(business)
}

const updateBusiness = async () => {
  const business = await Business.update(
    { rating: 1 },
    { where: { name: "Fry's" }, returning: true, plain: true }
    // { returning: true }
  )
  //   returns number of records updated, if a record or redcords were updated, returns an array with results as well
  stringify(business)
}

const findAndUpdate = async () => {
  const business = await Business.findOne({ where: { name: "Fry's" } })
  let result = await business.update({ rating: 3 })
  stringify(result)
}

const deleteRecord = async () => {
  let deleted = await Business.destroy({ where: { name: "Fry's" } })
  console.log(deleted)
  //   returns number of records deleted
}

const rawQuery = async () => {
  const result = await sequelize.query(
    'SELECT * FROM businesses WHERE rating > 3'
  )
  console.log(result)
}

async function main() {
  try {
    // await findAllBusinesses()
    // await findBusinessById()
    // await findBusinessesWhere()
    // await findBusinessLike()
    // await findBusinessesWithRating()
    // await findBusinessLimitOrder()
    // await findOneBusiness()
    // await createBusiness()
    // await updateBusiness()
    // await findAndUpdate()
    // await deleteRecord()
    // await rawQuery()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
