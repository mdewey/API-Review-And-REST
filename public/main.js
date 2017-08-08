console.log('loaded file');

// this is where we define the URL of
// the api we are using (the back end)
const url = '/api/robot';
fetch(url).then(resp => resp.json()).then(json => {
  // the varible `json` is the data the API (the back end)
  // is returning the
  console.log(json);
  let container = document.createElement('div');
  container.textContent = json.name;
  let output = document.querySelector('#output');
  output.appendChild(container);
});
