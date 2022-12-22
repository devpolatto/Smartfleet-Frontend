"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinesServices = void 0;
const axiosConfig_1 = require("../axiosConfig");
const getAllFines = (page = 1, plateFilter = '') => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/multas?page=${page}&_limit=15&placa_like=${plateFilter}`;
    // const url = `/multas`
    try {
        const { data, headers } = yield axiosConfig_1.instanceAxios.get(url);
        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || 10)
            };
        }
        return new Error('Erro ao buscar os dados');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao buscar os dados');
    }
});
const getFinesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/multas/:id`;
    try {
        const { data, headers } = yield axiosConfig_1.instanceAxios.get(url);
        if (id) {
            return data;
        }
        return new Error('Erro ao buscar a multa');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao buscar a multa');
    }
});
exports.FinesServices = {
    getAllFines,
    getFinesById
};
