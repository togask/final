import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    yogurts: [],
    selectedYogurt: null,
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
    selectYogurt({ commit }, yogurt) {
      commit("SET_SELECTED_YOGURT", yogurt);
    },
    addYogurt({ commit }, newYogurt) {
      commit("ADD_YOGURT", newYogurt);
    },
    updateYogurt({ commit }, updatedYogurt) {
      axios
        .put(`/api/yogurts/${updatedYogurt.id}`, updatedYogurt)
        .then(() => {
          commit("UPDATE_YOGURT", updatedYogurt);
        })
        .catch((error) => {
          console.error("ヨーグルトの更新に失敗しました", error);
        });
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
    SET_SELECTED_YOGURT(state, yogurt) {
      state.selectedYogurt = yogurt;
    },
    ADD_YOGURT(state, newYogurt) {
      state.yogurts.push(newYogurt);
    },
    UPDATE_YOGURT(state, updatedYogurt) {
      const index = state.yogurts.findIndex((y) => y.id === updatedYogurt.id);
      if (index !== -1) {
        state.yogurts.splice(index, 1, updatedYogurt);
      }
    },
    REMOVE_YOGURT(state, yogurtId) {
      state.yogurts = state.yogurts.filter((yogurt) => yogurt.id !== yogurtId);
    },
  },
});

export default store;
