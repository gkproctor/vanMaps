import Typography from "typography"
// fairyGateTheme is from Part 3 of the tutorial
// import fairyGateTheme from "typography-theme-fairy-gates"
// const typography = new Typography(fairyGateTheme)
// export const { scale, rhythm, options } = typography

// kirkhamTheme is from Part 4 of the tutorial
import kirkhamTheme from "typography-theme-kirkham"
const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
