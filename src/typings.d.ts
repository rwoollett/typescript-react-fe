declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module '*.svg' {
//   const value: any;
//    export = value;
// }

// declare module '*.png' {
//   const value: any;
//    export = value;
// }


//declare module '@babel/plugin-syntax-dynamic-import';