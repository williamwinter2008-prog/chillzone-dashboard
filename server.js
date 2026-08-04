const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const cors = require("cors");


const app = express();

app.use(cors());


const client = new Client({

    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]

});



let botStatus = "Offline";
let memberCount = 0;



client.once("ready", () => {

    console.log(`Logged in as ${client.user.tag}`);

    botStatus = "Online";


    const guild = client.guilds.cache.first();


    if(guild){

        memberCount = guild.memberCount;

    }

});



app.get("/api/status", (req,res)=>{


res.json({

    status: botStatus,
    members: memberCount

});


});



app.listen(3000, ()=>{

console.log("Dashboard server running on port 3000");

});



client.login("MTUzMjg3MDI1MDQ4MjIzNzUzMA.GUeVHY.c0rAq60oIw1-SN2q90MzJ3gHiKQVX3M2jSoNbQ");
node server.js

node server.js
