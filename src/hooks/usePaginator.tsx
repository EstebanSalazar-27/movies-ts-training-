import { useReducer } from "react";


// Types
enum PaginationActionKinds {
    NEXT_PAGE = 'NEXT_PAGE',
    PREVIOUSLY_PAGE = 'PREVIOUSLY_PAGE',
}

// An interface for our actions
interface PaginatorActions {
    type: PaginationActionKinds;
    payload: number;
}

// An interface for our state
interface PaginationState {
    page: number;
}

// Initial Value
const INITIAL_STATE: PaginationState = { page: 1 }
// Our reducer function that uses a switch statement to handle our actions
function PaginationReducer(state: PaginationState, action: PaginatorActions) {

    switch (action.type) {
        case PaginationActionKinds.NEXT_PAGE:
            return {
                ...state,
                page: state.page + action.payload,
            };
        case PaginationActionKinds.PREVIOUSLY_PAGE:
            return {
                ...state,
                page: state.page - action.payload,
            };
        default:
            throw new Error("Type hasn't been defined");
    }
}

// * This is the specific type of return of our Hook usePaginator
type UsePaginationReturn = {
    page: number;
    nextPage: () => void;
    prevPage: () => void;

}

// * In this hook i've development a dinamyc  logic to handle the system of  paginator of every single endpoint 
export const usePaginator = (): UsePaginationReturn => {
    const [state, dispatch] = useReducer(PaginationReducer, INITIAL_STATE)


    function nextPage() {
        dispatch({ type: PaginationActionKinds.NEXT_PAGE, payload: 1 })
    }
    function prevPage() {
        const condition = state.page > 1
        if (condition) { dispatch({ type: PaginationActionKinds.PREVIOUSLY_PAGE, payload: 1 }) }

    }

    return { page: state.page, nextPage, prevPage }
}