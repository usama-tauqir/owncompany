"use client";


import {megaMenuData} from "@/data/megaMenuData";


import CapabilitiesMenu from "./layouts/CapabilitiesMenu";
import IndustriesMenu from "./layouts/IndustriesMenu";
import SimpleListMenu from "./layouts/SimpleListMenu";


interface Props{

menu:string|null;

}



export default function MegaMenuPanel({
menu
}:Props){


if(!menu)
return null;



const data = megaMenuData[menu];



if(!data)
return null;



switch(data.type){


case "capabilities":

return (
<CapabilitiesMenu data={data}/>
);



case "industries":

return (
<IndustriesMenu data={data}/>
);



case "simple":

return (
<SimpleListMenu data={data}/>
);



default:

return null;


}

}