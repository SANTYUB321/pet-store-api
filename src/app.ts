// app.ts
import { Server } from "../src/presentation/sever";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({}).start();
  }