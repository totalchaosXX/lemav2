import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
    Switch,
    Tooltip,
    Button,
    Select, 
    Option,
    Input
  } from "@material-tailwind/react";
  import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    PencilIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
  import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
  import { platformSettingsData, conversationsData, projectsData } from "@/data";
  import { mayorDemanda } from "@/data";


export function Portada () {

return (

    <>
        
        <Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">
        <CardBody>

        <div className="gird-cols-1 mb-1 grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Filtros
              </Typography>
              
             
            </div>
          
            
          </div>
          


        <div className="mb-1 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-7">
        
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
            Sector económico
          </Typography>
          <Select label="Seleccionar">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>
          
         
      
       </div>

       <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
           Cargo
          </Typography>
          <Select label="Seleccionar">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>
          

       </div>

       <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
           Habilidad
          </Typography>
          <Select label="Seleccionar">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>
          

       </div>

       <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
           Locación
          </Typography>
          <Select label="Seleccionar">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>
          

       </div>

            
              
            
      </div>

  

          
          
        </CardBody>
      </Card>

      <Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

        <CardBody>
            <div>
              <Typography variant="h6" color="blue-gray">
                Demanda actual  
              </Typography>
              
             
            </div>
          
      
        </CardBody>
    </Card>

    
    <div className="mb-1 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">


    <Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

    <CardBody>

        <div>
        <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
            TOTAL DATOS OBSERVADOS 
        </Typography>
        
        
        </div>
    
        

    </CardBody>
    </Card>
    <Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

<CardBody>

    <div>
    <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
        OFERTAS ACTIVAS
    </Typography>
    
    
    </div>

    

</CardBody>
</Card>

<Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

<CardBody>

    <div>
    <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
        EMPRESAS OFERENTES
    </Typography>
    
    
    </div>

    

</CardBody>
</Card>
<Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

<CardBody>

    <div>
    <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
        CARGOS OBSERVADOS
    </Typography>
    
    
    </div>

    

</CardBody>
</Card>


    </div>
    
    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
    <Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

<CardBody>

    <div>
    <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
        RANKING MAYOR DEMANDA 
    </Typography>

    <table className="w-full min-w-[640px] table-auto">

    <thead>
              <tr>
                {["", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {mayorDemanda.map(
                ({ nombre, total }, key) => {
                  const className = `py-3 px-5 ${
                    key === mayorDemanda.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={nombre}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                         
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {nombre}
                            </Typography>
                          
                          </div>
                        </div>
                      </td>
                     
                    
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {total}
                        </Typography>
                      </td>
                   
                    </tr>
                  );
                }
              )}
            </tbody>

      </table>
    
    
    </div>

    

</CardBody>
</Card>

<Card className="mx-3 mt-5 mb-1 lg:mx-1 border border-blue-gray-100">

<CardBody>

    <div>
    <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
        GRÁFICO RANKING MAYOR DEMANDA
    </Typography>
    
    
    </div>

    

</CardBody>
</Card>

    </div>

    </>
)

}

export default Portada