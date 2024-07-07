import { Router } from 'express';
import { AuthController } from './controlers'; // 1
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure'; // 5

export class AuthRoutes {


    static get routes(): Router {
  
      const router = Router();

      const datasource = new AuthDataSourceImpl(); //6
      const AuthRepository = new AuthRepositoryImpl(datasource); //7
      const controller = new AuthController(AuthRepository); // 2 // 8 actulizacion
  
        /**
         * Post track
         * @openapi
         * /api/auth/login:
         *   post:
         *     tags:
         *       - users
         *     summary: "Post login"
         *     description: Esta ruta permite iniciar sesión al usuario
         *     requestBody:
         *       content:
         *         application/json:
         *     responses:
         *       '200':
         *         description: Retorna un mensaje de aprobación
         *       '500':
         *         description: Retorna un mensaje de que se cayó el servidor
         *       '404':
         *         description: Retorna un mensaje de servicio no encontrado
         */
        router.post("/login", controller.loginUser);

        /**
         * Post track
         * @openapi
         * /api/auth/register:
         *   post:
         *     tags:
         *       - users
         *     summary: "Post register"
         *     description: Esta ruta permite registrar a un nuevo usuario
         *     requestBody:
         *       content:
         *         application/json:
         *           schema:
         *             $ref: "#/components/schemas/user"
         *     responses:
         *       '200':
         *         description: Retorna un mensaje de aprobación
         *       '500':
         *         description: Retorna un mensaje de que se cayó el servidor
         *       '404':
         *         description: Retorna un mensaje de servicio no encontrado
         */       
        router.post('/register', controller.registerUser) // 4
  
  
        return router;
    }
  
  }