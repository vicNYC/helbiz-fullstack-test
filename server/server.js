const express = require('express');
const app = express();
const port = 5000;
const request= require('request')
const fs = require('fs')

// apollo server below
const{ ApolloServer, gql} = require('apollo-server-express')
const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8' }))
//built out another file so require it in instead....
const resolvers = require('./resolvers')
//writing apollo servers
const apolloServer = new ApolloServer({typeDefs,resolvers});
apolloServer.applyMiddleware({app, path: '/graphql' })


const helbizAPI =  'https://api.helbiz.com/admin/reporting/arlington/gbfs/free_bike_status.json'
const apiResult = {one:[]}
app.get('/refresh',(req,res,next)=>{
request(helbizAPI,(error,response,body)=>{
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)        
    let storeThis = JSON.parse(body)
    info = storeThis.data.bikes
    apiResult.one= info
    console.log('helbiz api info', apiResult)
    console.log("successful rest api")
    // fs.writeFile('result.json',JSON.stringify(storeThis), 'utf8', function(err){
    //     if(err){
    //         console.log("an error occured in writing")
    //     }
    //     console.log('json file has been saved')

    // })
    
 return next()       
})
return res.status(200)
}
)


app.listen(port, () => console.info(`Server started on port ${port}`));

module.exports = apiResult





