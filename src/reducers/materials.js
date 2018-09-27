import { FETCH_MATERIALS, REQUEST_MATERIALS_SUCCESS, REQUEST_MATERIALS_ERROR, CLOSE_MATERIALS_MODAL } from "../constants/action-types";

export default function materialsReducer (state = { material: [], openMaterialsModal: false }, action) {
    switch (action.type) {
        case FETCH_MATERIALS:
            return {
                material: [],
                openMaterialsModal: false,
                error: false
            };
        case REQUEST_MATERIALS_SUCCESS:
            return {
                material: action.payload,
                openMaterialsModal: true,
                error: false
            };
        case REQUEST_MATERIALS_ERROR:
            return {
                material: [],
                openMaterialsModal: false,
                error: true
            };
        case CLOSE_MATERIALS_MODAL:
            return {
                openMaterialsModal: false
            };
        default:
            return state;
    }
}