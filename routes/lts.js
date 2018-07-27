const moment = require('moment')
const schedule = require('../data/release.json')

let filtered = Object.keys(schedule).filter(v => {
    let release = schedule[v]
    if(moment(release.start).isBefore() && moment(release.end).isAfter()) return true
    return false
}).map(v => {
    let r = schedule[v]
    return {
        version: v,
        start: moment(r.start),
        end: moment(r.end),
        diff: moment(r.end).diff(r.start) / 1000 / 60 / 60 / 24,
        current: moment().diff(r.start) / 1000 / 60 / 60 / 24
    }
});

filtered.forEach(checkForPublishing)


module.exports = function(app) {

    app.get('/lts', (req,res) => {
        res.render('lts', {
            releases: filtered
        })
    })
}


function checkForPublishing(v) {
    let percent = v.diff / 100
    let current = v.current 
    let value = Math.floor(current / percent)

    if(value !== v.value) {
        v.value = value
    }
}