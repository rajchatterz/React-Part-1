import componentImg from './assets/component.png'
import stateImg from './assets/state.png'
import jsxImg from './assets/jsx.png'
import prop from './assets/prop.png'

export const Core_concept = [
    {
        image: componentImg,
        title: 'Component',
        description:
        'The core UI building block - compose the user internface by '
    },
    {
        image: stateImg,
        title: 'state',
        description:
        'The core UI building block - compose the user internface by '
    },
    {
        image: jsxImg,
        title: 'JSX',
        description:
        'The core UI building block - compose the user internface by '
    },
    {
        image: prop,
        title: 'Prop',
        description:
        'The core UI building block - compose the user internface by '
    },
]
export const Example = {
    component: {
        title1: 'Components',
        description:
          'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
        code: `
    function Welcome() {
      return <h1>Hello, World!</h1>;
    }`,
      },
      jsx: {
        title1: 'JSX',
        description:
          'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
        code: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React!</p>
    </div>`,
      },
      props: {
        title1: 'Props',
        description:
          'Components accept arbitrary inputs called props. They are like function arguments.',
        code: `
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
      },
      state: {
        title1: 'State',
        description:
          'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
        code: `
    function Counter() {
      const [isVisible, setIsVisible] = useState(false);
    
      function handleClick() {
        setIsVisible(true);
      }
    
      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,
      },
}