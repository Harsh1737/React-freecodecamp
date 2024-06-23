//grab root
//render something (a tag or anything) to the root
// Anything returned by a function is a JSX like <a> tag here
//React tries to make a tree from the returned elements

const mainContainer = document.querySelector('#root')

const reactElement = {
    type: 'a',  //can be div..
    props: {    //props is an object
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me'
    // there can be multiple childrens
    //there can be multiple props
}
//this is our defined react element , we need to pass JSX in this format only

// We need a method to render this . i.e add this elem to #root

const customRender = (reactElement, mainContainercontainer)

function customRender(reactElement, container) {
    const { type, props, children } = reactElement
    const newElement = document.createElement(type)
    newElement.innerHTML = reactElement.children
    for (let prop in reactElement.props) {
        newElement[prop] = props[prop]
        //newElement.setAttribute(prop, props[prop])
    }
    container.appendChild(newElement)

}