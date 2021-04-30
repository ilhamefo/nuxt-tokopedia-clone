

export const state = () => ({
  data: {
    focusKategori: false,
    focus: false,
    focusRight: false,
    showSkeleton: true,
    showNotificationContainer: false,
    showCartContainer: false,
    showChatContainer: false,
    showSellerContainer: false,
    showMemberContainer: false,
    showKategoriContainer: false,
  }
})

export const getters = {
  stateGetters: state => state.data
}

export const mutations = {
  focusKategori(state, toggle) {
    state.data.focusKategori = toggle
  },
  focusState(state, toggle) {
    state.data.focus = toggle
  },
  focusRightState(state, toggle) {
    state.data.focusRight = toggle
  },
  showSkeletonState(state) {
    state.data.showSkeleton = false
  },
  showNotificationContainer(state, toggle) {
    state.data.showNotificationContainer = toggle
  },
  showCartContainer(state, toggle) {
    state.data.showCartContainer = toggle
  },
  showSellerContainer(state, toggle) {
    state.data.showSellerContainer = toggle
  },
  showMemberContainer(state, toggle) {
    state.data.showMemberContainer = toggle
  },
  showKategoriContainer(state, toggle) {
    state.data.showKategoriContainer = toggle
  },
  showChatContainer(state, toggle) {
    state.data.showChatContainer = toggle
  }
}
