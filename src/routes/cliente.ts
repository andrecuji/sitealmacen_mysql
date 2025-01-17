import { Request, Response, Application, Router } from "express";

import { ClienteController } from '../controllers/cliente.controller';

export class ClienteRoutes {
    public clienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        app.route("/clientes").get(this.clienteController.getAllCliente)
        app.route("/cliente/:id").get(this.clienteController.getOneCliente);
        app.route("/cliente").post(this.clienteController.createCliente);
        app.route("/cliente/:id").patch(this.clienteController.updateCliente);
        app.route("/cliente/ocultar/:id").patch(this.clienteController.ocultarCliente);
        app.route("/cliente/eliminar/:id").delete(this.clienteController.deleteCliente);
    }
}
