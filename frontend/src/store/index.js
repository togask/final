import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    yogurts: [],
  },
  actions: {
    fetchYogurts({ commit }) {
      axios
        .get("/api/yogurts")
        .then((response) => {
          commit("SET_YOGURTS", response.data);
        })
        .catch((error) => {
          console.error("ヨーグルトの取得に失敗しました", error);
        });
    },
    addYogurt({ commit }, newYogurt) {
      commit("ADD_YOGURT", newYogurt);
    },
  },
  mutations: {
    SET_YOGURTS(state, yogurts) {
      state.yogurts = yogurts;
    },
    ADD_YOGURT(state, newYogurt) {
      state.yogurts.push(newYogurt);
    },
  },
});

export default store;
