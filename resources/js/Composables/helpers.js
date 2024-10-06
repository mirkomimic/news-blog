function toggleBasedOnTheme(theme, ifLight, ifDark) {
  return theme.global.name.value == 'light' ? ifLight : ifDark
}
function toggleTheme (theme) {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}


export {toggleBasedOnTheme, toggleTheme}
