function classes(...name:(string | undefined)[] ) {

  return name.filter(Boolean).join(" ")
}
const scopedClassMaker = (prefix: string) => {
  return function x(name?: string) {
    return [prefix, name].filter(Boolean).join("-")
  }
};
export {classes,scopedClassMaker} 