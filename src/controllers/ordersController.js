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

export async function getOrder(req, res){
    const date = req.query.date;
    try {
        if (date) {
            const { rows: orders } = await ordersRepository.getOrdersByDate(date);
            if (orders.length === 0){
                return res.status(404).send([]);
            }
    
            for (let order of orders){
                const { rows: client } = await ordersRepository.searchClient(order.client);
                const { rows: cake } = await ordersRepository.searchCake(order.cake);
                order.client = client[0];
                order.cake = cake[0];
            }
    
            res.status(200).send(orders);
        } else {
            const { rows: orders } = await ordersRepository.getOrders();
            if (orders.length === 0){
                return res.status(404).send([]);
            }
    
            for (let order of orders){
                const { rows: client } = await ordersRepository.searchClient(order.client);
                const { rows: cake } = await ordersRepository.searchCake(order.cake);
                order.client = client[0];
                order.cake = cake[0];
            }
    
            res.status(200).send(orders);
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getOrderById(req, res){
    const id = req.params.id;
    try {
        const { rows: order } = await ordersRepository.getOrdersByid(id);
        if (order.length === 0){
            return res.sendStatus(404);
        }
        const { rows: client } = await ordersRepository.searchClient(order[0].client);
        const { rows: cake } = await ordersRepository.searchCake(order[0].cake);
        order[0].client = client[0];
        order[0].cake = cake[0];
        res.status(200).send(order[0]);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);        
    }
}