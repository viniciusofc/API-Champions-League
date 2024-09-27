import * as HttpResponse from "../utils/http-helper";
import * as repository from '../repositories/clubs-repository';

export const getClubService = async () => {
    let response = null;
    const data = await repository.findAllClubs();

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    };

    return response;
};