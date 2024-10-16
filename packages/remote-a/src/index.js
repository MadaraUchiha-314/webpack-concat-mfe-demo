export async function doSomething() {
  const React = {
    version: '1.2.3'
  };
  // const React = await import('react');
  const reactVersion = React.version;
  console.log(React);
  console.log(reactVersion);
  return {
    reactVersion: reactVersion,
  };
}

const something = await doSomething();

document.getElementById('remote-a').innerHTML =
  'remote-a says' + JSON.stringify(something);
