import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    let response = null;
    const data = await PlayersRepository.findAllPlayers();

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    };

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    let response = null;
    const data = await PlayersRepository.findPlayersById(id);

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    };

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayersRepository.insertPlayer(player);

        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;

    const isDeleted = await PlayersRepository.deleteOnePlayer(id);
    if (isDeleted) {
        response = await HttpResponse.ok({ message: "deleted" });
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    let response = null;
    const data = await PlayersRepository.findAndModifyPlayer(id, statistics);

    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
};