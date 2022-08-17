import dayjs from "dayjs";
import { ordersRepository } from "../repositories/ordersRepository.js";

export async function registerOrder(req, res){
    const order = req.body;
    try {
        const { rows: client } = await ordersRepository.searchClient(order.clientId);
        const { rows: cake } = await ordersRepository.searchCake(order.cakeId);

        if(!client[0] || !cake[0]){
            return res.status(404).send("Client or Cake invalid!")
        }

        const totalPrice = parseFloat(cake[0].price) * order.quantity;
        const createdAt = dayjs(Date.now()).format("YYYY-MM-DD HH:mm");
        await ordersRepository.registerOrder(order.clientId, order.cakeId, order.quantity, totalPrice, createdAt);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);         
    }
}