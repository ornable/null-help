const div = document.querySelector(".test")
let timeoutSetting = 1000;

async function test(){
  const options = {
    headers: {
      'Accept' : 'application/json',
      // 'Content-Type' : 'application/json'
    },
    method: "GET"
  }
  const data = await fetch('http://localhost:3000/test', options)
  const json = await data.json()
  await console.log(json)
}

async function retrieve(){
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"title":"thisisatitle"}'
  };
  const data = await fetch('http://localhost:3000/retrieve', options)
  const json = await data.json()
  await console.log(json)
  div.innerHTML = json.title
  console.log('test2')
  thisIsATimer(json.test * 1500);
}

function thisIsATimer(timeoutSetting){
  console.log('test')
  setInterval(() => {
    console.log('hello')
  }, timeoutSetting);
}

retrieve()
