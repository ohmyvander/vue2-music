import * as types from '@/store/types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [types.SET_SINGER](state: Music.State, singer: Music.Singer): void {
    state.singer = singer;
  },
  [types.SET_PLAYING](state: Music.State, playing: boolean): void {
    state.playing = playing;
  },
  [types.SET_FULL_SCREEN](state: Music.State, fullScreen: boolean): void {
    state.fullScreen = fullScreen;
  },
  [types.SET_PLAY_LIST](state: Music.State, playList: Array<any>): void {
    state.playList = playList;
  },
  [types.SET_SEQUENCE_LIST](state: Music.State, sequenceList: Array<any>): void {
    state.sequenceList = sequenceList;
  },
  [types.SET_PLAY_MODE](state: Music.State, mode: Music.PlayMode): void {
    state.mode = mode;
  },
  [types.SET_CURRENT_INDEX](state: Music.State, currentIndex: number): void {
    state.currentIndex = currentIndex;
  },
};

export default mutations;
