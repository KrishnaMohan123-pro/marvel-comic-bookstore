const initialState = { total: 0 };

export default function totalSeriesReducer(state = initialState, action) {
  switch (action.type) {
    case "SERIES_FOUND":
      return { total: action.payload.total };

    default:
      return state;
  }
}
