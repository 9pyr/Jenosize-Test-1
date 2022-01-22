const actionsHomepage = {
  changeTab: (state, action) => {
    state.tab = action.payload
  },
  changeView: (state, action) => {
    state.view = action.payload
  },
  changeDate: (state, action) => {
    state.date = action.payload
  },
}
export default actionsHomepage
