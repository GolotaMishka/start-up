class LoadProgress {
  loadingKey: string;

  loadedKey: string;

  loadFailedKey: string;

  timestampKey: string;

  constructor(name, states = { loading: 'Loading', loaded: 'Loaded', loadFailed: 'LoadFailed' }) {
    this.loadingKey = `${name}${states.loading}`;
    this.loadedKey = `${name}${states.loaded}`;
    this.loadFailedKey = `${name}${states.loadFailed}`;
    this.timestampKey = `${name}LastProgressUpdate`;
  }

  changeProgress = (state, loading, loaded, loadFailed, time = new Date()) =>
    time > state.get(this.timestampKey) || !state.get(this.timestampKey)
      ? state.withMutations((myState) => {
          myState.set(this.loadingKey, loading);
          myState.set(this.loadedKey, loaded);
          myState.set(this.loadFailedKey, loadFailed);
          myState.set(this.timestampKey, time);
        })
      : state;

  setLoading = (state, time = new Date()) => this.changeProgress(state, true, false, false, time);

  getLoading = (state) => state.get(this.loadingKey);

  setLoaded = (state, time = new Date()) => this.changeProgress(state, false, true, false, time);

  getLoaded = (state) => state.get(this.loadedKey);

  setLoadFailed = (state, time = new Date()) => this.changeProgress(state, false, false, true, time);

  getLoadFailed = (state) => state.get(this.loadFailedKey);

  clear = (state) =>
    state.withMutations((myState) => {
      myState.delete(this.loadingKey);
      myState.delete(this.loadedKey);
      myState.delete(this.loadFailedKey);
      myState.delete(this.timestampKey);
    });
}

export default LoadProgress;
