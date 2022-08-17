import { flavoursRepository } from "../repositories/flavoursRepository.js";

export async function registerFlavour(req, res){
    const { name: newFlavour } = req.body;
    try {
        const { rows: flavour } = await flavoursRepository.searchFlavour(newFlavour);

        if (flavour[0]){
            return res.status(409).send("Flavour already registred!");
        }
        await flavoursRepository.registerFlavour(newFlavour);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}