import UiState from '@/models/state/UiState';

export const setLoading = ( state: UiState, loading: boolean ) => {
  state.loading = loading;
}

export const setAlertMessage = ( state: UiState, message = '' ) => {
  state.alert = {
    show: true,
    message
  }
  setTimeout(() => {
    state.alert = {
      show: false,
      message: ''
    }
  }, process.env.VUE_APP_ALERT_TIMEOUT);
}
