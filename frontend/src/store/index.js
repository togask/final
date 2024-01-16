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
    deleteYogurt({ commit }, yogurtId) {
      axios
        .delete(`/api/yogurts/${yogurtId}`)
        .then(() => {
          commit("REMOVE_YOGURT", yogurtId);
        })
        .catch((error) => {
          console.error("ヨーグルトの削除に失敗しました", error);
        });
    },
  },
  mutations: {
    SET_YOGURTS(state, yogurts) {
      state.yogurts = yogurts;
    },
    ADD_YOGURT(state, newYogurt) {
      state.yogurts.push(newYogurt);
    },
    REMOVE_YOGURT(state, yogurtId) {
      state.yogurts = state.yogurts.filter((yogurt) => yogurt.id !== yogurtId);
    },
  },
});

export default store;
