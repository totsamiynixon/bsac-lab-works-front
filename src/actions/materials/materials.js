import { FETCH_MATERIALS, REQUEST_MATERIALS_SUCCESS, REQUEST_MATERIALS_ERROR, CLOSE_MATERIALS_MODAL } from "../../constants/action-types";

export const fetchMaterials = (labId) => {
    return {
        type: FETCH_MATERIALS,
        payload: labId
    }
};

export const requestMaterialsSuccess = (materials) => {
    return {
        type: REQUEST_MATERIALS_SUCCESS,
        payload: materials.data
    }
};

export const requestMaterialsError = () => {
    return { type: REQUEST_MATERIALS_ERROR }
};

export const closeMaterialsModal = () => {
    return { type: CLOSE_MATERIALS_MODAL }
};