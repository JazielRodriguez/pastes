const path = require('path')
const express = require('express')
const app = express()
const indexRoute = require('./routes/indexRoute')
const pastesRoute = require('./routes/pastesRoute')
const sucursalesRoute = require('./routes/sucursalesRoute')
const nosotrosRoute = require('./routes/nosotrosRoute')
const franquiciasRoute = require('./routes/franquiciasRoute')
const facturacionRoute = require('./routes/facturacionRoute')
const atencionRoute = require('./routes/atencionRoute')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use(indexRoute)

app.use(pastesRoute)

app.use(sucursalesRoute)

app.use(nosotrosRoute)

app.use(franquiciasRoute)

app.use(facturacionRoute)

app.use(atencionRoute)

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
