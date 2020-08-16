const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const axios = require('axios').default
const { prisma } = require('./generated/javascript-client')



const resolvers = {
  Query: {
    coins: (parent, args, context, info) => context.prisma.coins({}, info),
  },
  Mutation: {
    updateCoin: (parent, args, context, info) => {
      const updatedCoin = context.prisma.updateCoin({
        where: { id: args.id },
        data: {
          base: args.base,
          target: args.target,
          price: args.price
        },
      }, info)
      return newCoin
    },
  },
  Subscription: {
    coins: {
      subscribe: (parent, args, context, info) => {
        return context.prisma.coin(
          {
            where: {
              mutation_in: ['CREATED', 'UPDATED'],
            },
          },
          info,
        )
      },
    },
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

    // Fetch data from the api
    const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-eur')

    const { ticker: { base, target, price } } = response.data

    // Update db with new fetched data
    await prisma.updateCoin({
      where: { id: '5f393fde02743900072e4140' },
      data: {
        base: base,
        target: target,
        price: price
      },
    })
    const coins = await prisma.coins()
    console.log("Coins", coins)

    } catch (err) {
      console.log(err)
    }
  }, 30000)
  console.log(`Server is running on http://localhost:${args.port}`)
})