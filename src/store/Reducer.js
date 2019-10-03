import * as types from "../constants/ActionTypes";

const initialState = {
  userIsLoggedIn: false,
  username: "",
  password: "",
  chartType: "1",
  error: null,
  data: [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
  ]
};

// Reducer
export const reducer = (state = initialState, action) => {
  //console.log('Dispatch Request: ' + action.type)
  switch (action.type) {
    case types.USER_LOGIN:
      if (action.username === "test" && action.password === "1234") {
        return {
          ...state,
          userIsLoggedIn: true,
          username: action.username,
          password: action.password,
          error: null
        };
      } else {
        return {
          ...state,
          error: "Login Incorrect",
          userIsLoggedIn: false
        };
      }
    case types.USER_LOGOUT:
      return {
        ...state,
        error: null,
        password: "",
        username: "",
        userIsLoggedIn: false
      };
    case types.CHANGE_CHART:
      return {
        ...state,
        data: generateData()
      };
    default:
      return state;
  }
};

const generateData = () => {
  let data = [
    {
      name: "Page A",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page B",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page C",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page D",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page E",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page F",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    },
    {
      name: "Page G",
      uv: largeRandom(1000, 3000),
      pv: largeRandom(1000, 8000),
      amt: largeRandom(2000, 300)
    }
  ];
  //console.log(data)
  return data;
};

const largeRandom = (start, range) => {
  return start + Math.random() * range;
};

export default reducer;
