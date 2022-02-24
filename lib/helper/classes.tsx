function classes(...name:(string | undefined)[] ) {

  return name.filter(Boolean).join(" ")
}
// const scopedClassMaker = (prefix: string) => {
//   return function x(name?: string) {
//     return [prefix, name].filter(Boolean).join("-")
//   }
// };
interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
  Object
    .entries(name instanceof Object ? name : {[name]: name})
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => [prefix, name]
      .filter(Boolean)
      .join('-'))
    .concat(options && options.extra || [])
    .join(' ');

export {classes,scopedClassMaker} 