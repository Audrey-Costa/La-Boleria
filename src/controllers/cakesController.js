import { cakeRepository } from "../repositories/cakeRepository.js";


export async function registerCake(req, res){
    const cake = req.body;
    try {
        const { rows: flavour } = await cakeRepository.searchFlavour(cake.flavourId);
        if(!flavour[0]){
            return res.status(404).send("Flavour not found");
        }
        await cakeRepository.registerCake(cake);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
}
