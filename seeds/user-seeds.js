const { User } = require('../models');

const userData = [
    {
        username: "rick_cady",
        twitter: "rickcd",
        github: "rickcd",
        email: "rickcady@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "javier_m",
        twitter: "javierm",
        github: "javierm",
        email: "javiermolano@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "sofia_a",
        twitter: "sofiaa",
        github: "sofiaa",
        email: "sofiacady@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "camila_m",
        twitter: "camilam",
        github: "camilam",
        email: "camilacady@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "diana_m",
        twitter: "dianam",
        github: "dianam",
        email: "molanodiana32@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "andrez_m",
        twitter: "andrezm",
        github: "andrezm",
        email: "andrezm@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;