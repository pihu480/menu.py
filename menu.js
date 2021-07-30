let readlineSync = require("readline-sync");
var day= readlineSync.question("enter the day")
var menu=readlineSync.question("enter the menu")
if (day=="manday"){
    if (menu=="breakfast"){
        console.log("poha");
    }
    else if (menu=="lunch"){
        console.log("dal ,chavl");
    }
    else if(menu=="dinner"){
        console.log("roti,began ki bhaji");
    }

}
else if (day=="tuesday"){
    if (menu=="breakfast"){
        console.log("maagi");
    }
    else if(menu=="lunch"){
        console.log("chane ki dal chavl");
    }
    else if(menu=="dinner"){
        console.log("roti,gobi ki bhaji");
    }

}
else if (day=="wednesday"){
    if (menu=="breakfast"){
        console.log("chila");
    }
    else if(menu=="lunch"){
        console.log("loki ki dal chavl");
    }
    else if(menu=="dinner"){
        console.log("roti,panir ki bhaji");
    }

}
else if (day=="thursday"){
    if (menu=="breakfast"){
        console.log("etliy");
    }
    else if(menu=="lunch"){
        console.log("mish baji, chavl");
    }
    else if(menu=="dinner"){
        console.log("chola ,puri");
    }

}
else if (day=="friday"){
    if (menu=="breakfast"){
        console.log("pav bhaji");
    }
    else if(menu=="lunch"){
        console.log("dal ,chaval");
    }
    else if(menu=="dinner"){
        console.log("panir ,puri");
    }

}
else if (day=="saturday"){
    if (menu=="breakfast"){
        console.log("alu ke parthe");
    }
    else if(menu=="lunch"){
        console.log("palk panir chavl");
    }
    else if(menu=="dinner"){
        console.log("bhindi ,roti");
    }

}
else if (day=="sunday"){
    if (menu=="breakfast"){
        console.log("alu roll");
    }
    else if(menu=="lunch"){
        console.log("chole, chaval");
    }
    else if(menu=="dinner"){
        console.log("roti ,karela");
    }

}