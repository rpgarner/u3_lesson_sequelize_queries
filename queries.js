const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
  //////////// find all buisnesses////////////
//   try { 
//   const businesses = await Business.findAll()
//   stringify(businesses)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await sequelize.close()
//   }
// }

/////////////////// find buisness by id////////////////
// try { 
// const businesses = await Business.findByPk(100)
// stringify(businesses)
// } catch (error) {
//   console.log(error)
// } finally {
//   await sequelize.close()
// }
// }

///////////////////Find a buisness where the rating is a 5/////////////
// try { 
// const businesses = await Business.findAll({
//   where: {
//     rating: 5
//   }
// })
// console.log(businesses)
// } catch (error) {
//   console.log(error)
// } finally {
//   await sequelize.close()
// }
// }

//////////find one buisness where the rating is a 4 ////////////
// try { 
// const businesses = await Business.findOne({
//   where: {
//     rating: 4
//   }
// }
// )
// console.log(businesses)
// } catch (error) {
//   console.log(error)
// } finally {
//   await sequelize.close()
// }
// }

////////////create a buisness////////////
// try { 
// const newBusiness = await Business.create({
//   name: 'canon construction',
//   address: '137 morgan hil, pennsilvannia',
//   rating: 10,
// })
// console.log(newBusiness)
// } catch (error) {
//   console.log(error)
// } finally {
//   await sequelize.close()
// }
// }

///////////////update the business that you just created//////////
// try { 
// const updatedBusiness = await Business.update({ name: 'canon'}, { where: { id: 101}})

// stringify(updatedBusiness)
// } catch (error) {
//   console.log(error)
// } finally {
//   await sequelize.close()
// }
// }

//////////////Delete the buisness you created ////////////
try { 
const deleteBusiness = await Business.destroy( { where: { id: 101}})
console.log(deleteBusiness)
} catch (error) {
  console.log(error)
} finally {
  await sequelize.close()
}
}


main()
