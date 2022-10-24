import { computed } from 'vue';
import { useStore } from 'vuex';

export const useUi = () => {

  const store = useStore();

  const setLoading = ( show: boolean, message: string ) => {
    store.dispatch( 'ui/setLoading', { show, message } );
  }

  const setAlertMessage = ( message: string ) => {
    store.dispatch( 'ui/setAlertMessage', message );
  }

  return {
    setAlertMessage,
    setLoading,
    alert: computed(() => store.getters['ui/getAlert']),
    isLoading: computed(() => store.getters['ui/getLoading'])
  }
}