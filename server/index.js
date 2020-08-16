const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const axios = require('axios').default
const { prisma } = require('./generated/javascript-client')



const resolvers = {
  Query: {
    coins: (parent, args, ctx, info) => ctx.prisma.coins({}, info),
  },
};

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
})

const options = {
  port: 8000,
  cors: {
    origin: '*',
  }
}

server.start(options, args => {

  setInterval(async () => {

    try {

    const coins = await prisma.coins()
    console.log("Coins", coins)

      // const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-eur')
    } catch (err) {
      console.log(err)
    }

  }, 3000)
  console.log(`Server is running on http://localhost:${args.port}`)
})