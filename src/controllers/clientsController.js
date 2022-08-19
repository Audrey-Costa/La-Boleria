import { clientsRepository } from "../repositories/clientsRepository.js";

export async function registerClient(req, res){
    const client = req.body;
    try {
        await clientsRepository.registerClient(client.name, client.address, client.phone);
        res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getClientOrders(req, res){
    const id = req.params.id;
    try {
        const { rows: client } = await clientsRepository.searchClient(id);
        if (client.length === 0){
            return res.sendStatus(404);
        }
        const { rows: orders } = await clientsRepository.getClientOrders(id);
        res.status(200).send(orders);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}