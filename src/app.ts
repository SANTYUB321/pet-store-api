import { envs } from "../src/config/envs";
import { AppRoutes } from "../src/presentation/routes"; //1
import { Server } from "../src/presentation/sever";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT,
        routes: AppRoutes.routes //2
      }).start();
  }