export async function doSomethingElse() {
  // const ReactDOM = {
  //   version: '5.6.7'
  // };
  const ReactDOM = await import('react-dom');
  const reactDomVersion = ReactDOM.version;
  console.log(ReactDOM);
  console.log(reactDomVersion);
  return {
    reactDomVersion: reactDomVersion,
  };
}

const somethingElse = await doSomethingElse();

document.getElementById('remote-b').innerHTML =
  'remote-b says' + JSON.stringify(somethingElse);
