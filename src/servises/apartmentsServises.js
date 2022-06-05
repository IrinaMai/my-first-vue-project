import axiosInstance from '../utils/axios';
// import axios from 'axios';

export const getApartmentsList =() => {
    return axiosInstance('/apartments')
}

export const getApartmentById = (id) => {
    return axiosInstance(`/apartments/${id}`)
}