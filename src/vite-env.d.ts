// Tells TypeScript that *.module.css files export an object of class name strings
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
