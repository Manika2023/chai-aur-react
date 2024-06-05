// custom library

function customRender(reactElement,container){

     // const domElement= document.createElement(reactElement.type)
     // domElement.innerHTML=reactElement.children
     // domElement.setAttribute('href',reactElement.props.href)
     // domElement.setAttribute('target',reactElement.props.target)
     
     // container.appendChild(domElement)

     // modular code => version 2
     const domElement=document.createElement(reactElement.type)
     domElement.innerHTML=reactElement.children
     for (const prop in reactElement.props){
          // if (Object.hasOwnProperty.call(object,prop)){
          //      const element=object[prop]
          // }
          if (prop === 'reactElement.children') continue;
          domElement.setAttribute(prop,reactElement.props[prop])
     }
     container.appendChild(domElement)

}

// value needs while using it
const reactElement={
     // a is tag of html
     type:"a",
     props:{
          href:"https://google.com",
          target:'_blank'
     },
     children:"click me to visit google"
}
const mainContainer=document.getElementById('root')

// what inject and where
customRender(reactElement,mainContainer)
